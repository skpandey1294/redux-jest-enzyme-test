import React, { Component } from 'react'

import '../../assets/styles/Albums.css'

import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'
import { fetchAlbums } from '../../redux/async-api/albums.js'
import { connect } from 'react-redux'

class Albums extends Component {
  componentDidMount() {
    this.props.albumsList()
  }

  render() {
    const { loading, albums, error } = this.props

    const albumsList = albums.map((album) => {
      return (
        <Link key={`album-${album.id}`} to={`/album/${album.id}`}>
          <div id={`album-${album.id}`} className="card">
            <Typography gutterBottom component="p">
              <b>Title</b>:{album.title}
            </Typography>
          </div>
        </Link>
      )
    })
    return loading === true ? <div>Loading...</div> : ( error !== '' ? <div>Something went wrong</div> :
      <div className="container1">{albumsList}</div> )
    
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.albumsReducer.loading,
    albums: state.albumsReducer.albums,
    error: state.albumsReducer.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    albumsList: () => dispatch(fetchAlbums()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
