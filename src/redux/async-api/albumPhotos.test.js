import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../actions/albumPhotos'
import { fetchAlbumPhotos } from './albumPhotos'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getAlbumPictures actions', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates FETCH_ALBUM_PICTURES_SUCCESS after successfuly fetching posts', () => {

    const pictures = [{ key1: 'samplePic1' }, { key2: 'samplePic2' }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: pictures,
      })
    })

    const expectedActions = [ actions.fetchAlbumPhotosRequest() , actions.fetchAlbumPhotosSuccess(pictures)]

    const store = mockStore()

    return store.dispatch(fetchAlbumPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})