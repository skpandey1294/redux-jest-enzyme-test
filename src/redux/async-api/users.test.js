import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../actions/users'
import { fetchUsers } from './users'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getUsers actions', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates FETCH_USERS_SUCCESS after successfuly fetching posts', () => {

    const users = [{ key1: 'user1' }, { key2: 'user2' }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: users,
      })
    })

    const expectedActions = [ actions.fetchUsersRequest() , actions.fetchUsersSuccess(users)]

    const store = mockStore()

    return store.dispatch(fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})