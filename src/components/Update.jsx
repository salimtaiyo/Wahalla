import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions/notesAction';

class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.note.title,
            body: this.props.note.body
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            uid: this.props.uid
        };
        this.props.editNote(this.props.match.params.id, note);
        this.setState({
            title: '',
            body: ''
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="update">
                <form onSubmit={this.handleSubmit}>
                        <input
                        className="update__input"
                        onChange={this.handleChange}
                        value={this.state.title}
                        type="text"
                        name="title"
                        required
                        />

                        <br/>
                        <textarea
                        className="update__text"
                        onChange={this.handleChange}
                        value={this.state.body}
                        type="text"
                        name="body"
                        required
                        />
                        <br/>
                        <button className="update__button">Update</button>
                </form>
            </div>
           
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        note: state.notes[ownProps.match.params.id],
        uid: state.user.uid
    };
}

export default connect(mapStateToProps, { editNote })(Update);
