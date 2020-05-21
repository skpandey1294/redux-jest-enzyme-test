import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../actions/userInfo'
import { fetchUserInfo } from './userInfo'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getUsersInfo actions', () => {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates FETCH_USERS_INFO_SUCCESS after successfuly fetching posts', () => {

    const userInfo = [{ key1: 'usersInfo1' }, { key2: 'usersInfo2' }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: userInfo,
      })
    })

    const expectedActions = [ actions.fetchUserInfoRequest() , actions.fetchUserInfoSuccess(userInfo)]

    const store = mockStore()

    return store.dispatch(fetchUserInfo()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})