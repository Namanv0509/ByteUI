import { decrement, increment, reset } from '@/lib/features/counter-slice'
import { store } from '@/lib/store'

describe('counter redux slice', () => {
  it('increments, decrements, and resets counter state', () => {
    store.dispatch(increment())
    expect(store.getState().counter.value).toBe(1)

    store.dispatch(decrement())
    expect(store.getState().counter.value).toBe(0)

    store.dispatch(increment())
    store.dispatch(reset())
    expect(store.getState().counter.value).toBe(0)
  })
})
