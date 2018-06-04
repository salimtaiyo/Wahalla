import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="header">
                <Link className="header__logo" to="/">
                    Wahalla 
                </Link>
            
                    {this.props.user === null ? (
                        <li>
                            <Link to="/login" className="header__login buttonEffect">Login</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/logout" className="header__logout buttonEffect" onClick={() => this.props.logout()}>
                                logout
                            </Link>
                        </li>
                    )}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { getUser, logout })(Nav);
