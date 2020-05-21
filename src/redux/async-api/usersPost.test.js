import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../actions/userPost'
import { fetchUserPost } from './usersPost'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getUsersPost actions', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates FETCH_USERS_POST_SUCCESS after successfuly fetching posts', () => {

    const post = [{ key1: 'post1' }, { key2: 'post2' }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: post,
      })
    })

    const expectedActions = [ actions.fetchUsersPostRequest() , actions.fetchUsersPostSuccess(post)]

    const store = mockStore()

    return store.dispatch(fetchUserPost()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})