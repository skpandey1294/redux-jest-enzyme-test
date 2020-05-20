import React, { Component } from 'react'

import '../../assets/styles/Posts.css'

import { Link } from 'react-router-dom'
import { fetchPosts } from '../../redux/async-api/posts.js'
import { connect } from 'react-redux'


import Typography from '@material-ui/core/Typography';


class Posts extends Component {

    componentDidMount() {
        this.props.postsList()
    }

    render() {
        const { loading, posts, error } = this.props


        const postsCard = posts.map(post => (
            <Link key={`post-${post.id}`} to={`/${post.id}`} >
            <div id={`post-${post.id}`} className="card">
            <Typography gutterBottom component="p">
                <span> <b>UserId</b>: {post.userId} </span>
            </Typography>
            <Typography gutterBottom component="p">
                <span> <b>PostId</b>: {post.id} </span>
            </Typography>
            <Typography gutterBottom component="p">
                <span><b>Title</b>: {post.title} </span>
            </Typography>
            </div>
            </Link>
        )) 
        return (

            loading === true ? <div>Loading...</div> : ( error !== '' ? <div>{error.message}</div> :
            <div className="container1">
                 {postsCard}
             </div> )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.postReducer.loading,
        posts: state.postReducer.posts,
        error: state.postReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postsList: () => dispatch(fetchPosts())
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)