import React, { Component } from 'react'

import { fetchAlbumPhotos } from '../../redux/async-api/albumPhotos.js'
import { connect } from 'react-redux'

import Slider from './slider'

class Photos extends Component {

    componentDidMount() {
        const { albumPhotos } = this.props
        const { albumId } = this.props.match.params

        albumPhotos(albumId)
    }

    render() {

        const { loading, photos, error } = this.props

        return (
        loading === true ? <div>Loading...</div> : ( error === '' ? <Slider images={photos}/> : <div>{error.message}</div> )
        )
    }
}

const mapStateToProps = (state) => {
  return {
    loading: state.albumPhotosReducer.loading,
    photos: state.albumPhotosReducer.photos,
    error: state.albumPhotosReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    albumPhotos: (albumId) => dispatch(fetchAlbumPhotos(albumId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)