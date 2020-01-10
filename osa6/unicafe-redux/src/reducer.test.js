import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = { good: 0, ok: 0, bad: 0 }

  test('should return a proper initial state when called with undefined state', () => {
    const newState = counterReducer(undefined, { type: 'DO_NOTHING' })
    expect(newState).toEqual(initialState)
  })

  test('reset works', () => {
    const state = { good: 10, ok: 10, bad: 10 }
    deepFreeze(state)
    const newState = counterReducer(state, { type: 'ZERO' })
    expect(newState).toEqual(initialState)
  })

  test('good can be incremented', () => {
    const state = initialState
    deepFreeze(state)
    const newState = counterReducer(state, { type: 'GOOD' })
    expect(newState).toEqual({...initialState, good: 1 })
  })

  test('ok can be incremented', () => {
    const action = { type: 'OK' }
    const state = initialState
    deepFreeze(state)
    const newState = counterReducer(state, { type: 'OK' })
    expect(newState).toEqual({...initialState, ok: 1 })
  })

  test('bad can be incremented', () => {
    const state = initialState
    deepFreeze(state)
    const newState = counterReducer(state, { type: 'BAD' })
    expect(newState).toEqual({...initialState, bad: 1 })
  })

})
