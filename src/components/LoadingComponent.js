import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getNotes } from '../actions/notesAction';
import LoadingEffect from '../components/LoadingEffect';

class LoadingComponent extends Component {
    componentWillMount() {
        const { userLoading, notesLoading } = this.props;
        //  load user
        if (userLoading === undefined) {
            this.props.getUser();
        }

        // load notes
        if (notesLoading === undefined) {
            this.props.getNotes();
        }
    }

    componentWillReceiveProps(nextProps) {
        // get authenticated and then load notes
        if (nextProps.notesLoading === -1 && nextProps.user !== null) {
            this.props.getNotes();
        }
    }

    render() {
        const { userLoading, notesLoading, children } = this.props;
        if ((!userLoading && !notesLoading) || this.props.user === null) {
            return <div>{children}</div>;
        } else {
            return <LoadingEffect />;
        }
    }
}

function mapStateToProps(state) {
    return {
        userLoading: state.loading.user,
        notesLoading: state.loading.notes,
        user: state.user
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getNotes })(LoadingComponent));
