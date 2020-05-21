import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../actions/posts'
import { fetchPosts } from '../async-api/posts'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getPosts actions', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates FETCH_POSTS_SUCCESS after successfuly fetching posts', () => {

    const posts = [{ key1: 'value1' }, { key2: 'value2' }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: posts,
      })
    })

    const expectedActions = [ actions.fetchPostsRequest() , actions.fetchPostsSuccess(posts)]

    const store = mockStore()

    return store.dispatch(fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})



