import React, { Component, Fragment } from 'react'

import '../../assets/styles/UserInfo.css'

import { fetchUserInfo } from '../../redux/async-api/userInfo.js'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';


class Users extends Component {

    componentDidMount() {
        const { userId } = this.props.match.params
        this.props.userInfo(userId)
    }

    render() {
        const { loading, userDetails, error } = this.props

        const userInformation = (
            <Fragment>
            
            <div key={`userInfo-${userDetails.id}`} id={`userInfo-${userDetails.id}`} className="card">

            <h3>User Details</h3>

            <Typography  gutterBottom component="p">
                <span><b>Name</b>:{userDetails.name}</span>
                </Typography>
    
                <Typography  gutterBottom component="p">
                <span><b>Username</b>:{userDetails.username}</span>
                </Typography>
    
                <Typography  gutterBottom component="p">
                <span><b>Email</b>:{userDetails.email}</span>
                </Typography>
    
                <Typography  gutterBottom component="p">
                <span><b>Contact</b>:{userDetails.phone}</span>   
                </Typography>
    
                <Typography  gutterBottom component="p">
                <span><b>Website</b>:{userDetails.website}</span>   
                </Typography>

            </div>
            </Fragment>
        )
        return (

            loading === true ? <div>Loading...</div> : ( error !== '' ? <div>{error.message}</div> :
            <div className="container1">
                 {userInformation}
             </div> )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.userInfoReducer.loading,
        userDetails: state.userInfoReducer.userDetails,
        error: state.userInfoReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userInfo: (userId) => dispatch(fetchUserInfo(userId))
    } 
}

export default connect( mapStateToProps, mapDispatchToProps )(Users)