import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            show: false,
            showBody: false
        };
    
        this.display = this.display.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNotes = this.renderNotes.bind(this);
        this.displayNotes = this.displayNotes.bind(this);
    }

    // toggle
    display() {
        this.setState({
            show: !this.state.show
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const note = {
            title: this.state.title,
            body: this.state.body,
            uid: this.props.user.uid
        };
        this.props.saveNote(note);
        this.setState({
            title: '',
            body: ''
        });
    }

    displayNotes(key){
        console.log(key);
        this.setState({
            showBody: !this.state.showBody
        })
       
    }

    renderNotes() {
        return _.map(this.props.notes, (note, key) => {
            return (
                <div className="savedNotes" onClick={(e) => this.displayNotes(key)} key={key}>
                    <NoteCard key={key}>
                        <h2 className="savedNotes__header">{note.title} </h2>
                        {
                            this.state.showBody?
                            <div > 
                                <p id="savedNotes__body">{note.body}</p>
                                {note.uid === this.props.user.uid && (
                                <div> 
                                    <button className="savedNotes__del" onClick={() => this.props.deleteNote(key)}>
                                        Delete
                                    </button>
                                    <button className="savedNotes__edit">
                                        <Link to={`/${key}/edit`}>Update</Link>
                                    </button>
                                </div>
                            )}
                            </div> : null
                        }  
                    </NoteCard>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="main">
            {
                this.state.show? 
                <div className="main__left">
                    <h4 className="left--name"> {this.props.user.displayName}`s Notes</h4>
                    <br/>
                    {this.renderNotes()}
                </div>: null
            }
                <div className="main__right">
                    <button className="button__toggle buttonEffect" onClick={this.display}> Notes </button>
                    <form onSubmit={this.handleSubmit}>
                       
                        <input
                            className="right--input"
                            placeholder="Title"
                            onChange={this.handleChange}
                            value={this.state.title}
                            type="text"
                            name="title"
                            required
                        />      
                        <textarea
                            className="right--textArea"
                            onChange={this.handleChange}
                            value={this.state.body}
                            type="text"
                            name="body"
                            required
                        />
                        <button className="button__save buttonEffect">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes,
        user: state.user
    };
}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote, getUser })(App);
