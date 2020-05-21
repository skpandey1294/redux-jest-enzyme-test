import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../actions/albums'
import { fetchAlbums } from './albums'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getAlbums actions', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates FETCH_ALBUMS_SUCCESS after successfuly fetching posts', () => {

    const albums = [{ key1: 'sample1' }, { key2: 'sample2' }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: albums,
      })
    })

    const expectedActions = [ actions.fetchAlbumsRequest() , actions.fetchAlbumsSuccess(albums)]

    const store = mockStore()

    return store.dispatch(fetchAlbums()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})