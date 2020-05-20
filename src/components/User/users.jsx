import React, { Component } from 'react';

import '../../assets/styles/Users.css';

import { Link } from 'react-router-dom';
import { fetchUsers } from '../../redux/async-api/users.js';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

class Users extends Component {
  componentDidMount() {
    this.props.usersList();
  }

  render() {
    const { loading, users, error } = this.props;

    const usersCard = users.map((user) => (
      <Link key={`user-${user.id}`} to={`/users/${user.id}`}>
        <div id={`user-${user.id}`} className="card">
          <Typography gutterBottom component="p">
            <span>
              <b>Name</b>:{user.name}
            </span>
          </Typography>

          <Typography gutterBottom component="p">
            <span>
              <b>Username</b>:{user.username}
            </span>
          </Typography>

          <Typography gutterBottom component="p">
            <span>
              <b>Email</b>:{user.email}
            </span>
          </Typography>

          <Typography gutterBottom component="p">
            <span>
              <b>Address</b>:{user.address.street}, {user.address.suite},{' '}
              {user.address.city}, {user.address.zipcode}
            </span>
          </Typography>

          <Typography gutterBottom component="p">
            <span>
              <b>Contact</b>:{user.phone}
            </span>
          </Typography>

          <Typography gutterBottom component="p">
            <span>
              <b>Website</b>:{user.website}
            </span>
          </Typography>

          <Typography gutterBottom component="p">
            <span>
              <b>Company</b>:{user.company.name}
            </span>
          </Typography>
        </div>
      </Link>
    ));
    return loading === true ? (
      <div>Loading...</div>
    ) : error !== '' ? (
      <div>{error.message}</div>
    ) : (
      <div className="container1">{usersCard}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.usersReducer.loading,
    users: state.usersReducer.users,
    error: state.usersReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersList: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
