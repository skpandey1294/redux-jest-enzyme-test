import React, { Component, Fragment } from 'react'

import '../../assets/styles/UserPost.css'

import { connect } from 'react-redux'

import { fetchUserPost, fetchUserComment } from '../../redux/async-api/usersPost.js'


import Typography from '@material-ui/core/Typography';

import { fetchUserInfo } from '../../redux/async-api/userInfo.js'

class UserPost extends Component {

    componentDidMount() {
        
        this.fetchAPIs()

    }

    fetchAPIs = async () => {

        const { fetchUserPost, fetchUserInfo, fetchUserComment, userPost } = this.props

        const { postId } = this.props.match.params

        await fetchUserPost(postId)

        fetchUserInfo(userPost.userId)

        fetchUserComment(postId)
    }


    render() {

        const { loading, userPost, error, usersComment, userDetails } = this.props


        const comments = usersComment.map(comment => {
        return(
            <div key={`comment${comment.id}`} className="comment">
            <Typography  gutterBottom component="p">
            <span ><b>comment by user</b>: {comment.name}</span>
            </Typography><br></br>
            <Typography  gutterBottom component="p">
            <span ><b>comment</b>: {comment.body}</span>
            </Typography>
            </div>
            )
        } )


         const userPostsData = (
            <Fragment>
            <div key={`post-${userPost.id}`} className="card2">
            <Typography gutterBottom component="p">
                <span> <b>Username</b>: {userDetails.name} </span>
            </Typography>
            <Typography gutterBottom component="p">
                <span> <b>Title</b>: {userPost.title} </span>
            </Typography>
            <Typography gutterBottom component="p">
                <span> <b>Body</b>: {userPost.body} </span>
            </Typography>
                <Fragment>{comments}</Fragment>
            </div>
            </Fragment>
            )


        return (
            ( loading === true ? <div>Loading...</div> : ( error !== '' ? <div>Something went wrong</div> : 
            <div className="container1">
               {userPostsData}
            </div> )
            )
        )
    }
}

const matchStateToProps = (state) => {

    return {
        loading: state.usersPostReducer.loading,
        userPost: state.usersPostReducer.userPost,
        error: state.usersPostReducer.error,
        commentLoading: state.usersCommentReducer.loading,
        usersComment: state.usersCommentReducer.usersComment,
        commentErr: state.usersCommentReducer.error,
        loadingUserDetails: state.userInfoReducer.loading,
        userDetails: state.userInfoReducer.userDetails,
        userDetailsErr: state.userInfoReducer.error
    }

}

const matchDispatchToProps = (dispatch) => {

    return {
        fetchUserPost: (postId) => dispatch(fetchUserPost(postId)),
        fetchUserInfo: (userId) => dispatch(fetchUserInfo(userId)),
        fetchUserComment: (postId) => dispatch(fetchUserComment(postId))
    }
}

export default connect( matchStateToProps, matchDispatchToProps )( UserPost )