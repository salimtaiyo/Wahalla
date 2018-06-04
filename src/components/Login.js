import React, { Component } from 'react';
import Typist from 'react-typist';
import '../sass/typed.scss';
import { connect } from 'react-redux';
import { googleLogin } from '../actions/userAction';

class Login extends Component {
    componentWillMount() {
        if (this.props.user !== null) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push('/');
        }
    }
   
    render() {
        return (
           <div className="login">
                <div className="login__container">
                    <div className="login__header">
                        <div className="login__header--logo">
                           <p className="logo--text"> Wahalla </p>
                        </div>
                    </div>

                    <div className="login__content">
                        <div className="content--img">
                            <div className="img--1"></div>
                            <div className="img--2"></div>
                            <div className="img--3"></div>
        
                        </div>

                        <div className="content--info">
                            <div className="content--info--header">  
                                <Typist className="MyTypist">
                                    <span> Make it Beautiful </span>
                                    <Typist.Backspace count={10} delay={5000} />
                                    <span> Nice </span>
                                    <Typist.Backspace count={5} delay={5000} />
                                    <span> infomative </span>
                                </Typist>   
                            </div>
                            <p className="content--info--sub"> Take your notes anywhere </p>
                            <button className="content--info--button" onClick={this.props.googleLogin}>
                            Login with G
                            </button>
                    </div>
                    </div>
                </div>
           </div>
        );
    }
}

function mapStateToProps(state, onwProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { googleLogin })(Login);
