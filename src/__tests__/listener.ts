import { it, describe, expect, vi } from 'vitest'
import { createCheatsListener } from '../listener.js'

const cheats = {
  yey: 0x03016B04,
  wow: 0x03007704
}

function dispatchKeys (keys: string[]) {
  keys.forEach((key) => {
    document.dispatchEvent(new KeyboardEvent('keydown', {
      code: key
    }))
  })
}

describe('createCheatsListener', () => {
  it('subscribes to document keyboard events', () => {
    const spy = vi.spyOn(document, 'addEventListener')
    const { start } = createCheatsListener({
      onCheat: vi.fn(),
      cheats
    })
    start()
    expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function))
  })

  it('stops listening to document keyboard events', () => {
    const spy = vi.spyOn(document, 'removeEventListener')
    const { stop } = createCheatsListener({
      onCheat: vi.fn(),
      cheats
    })
    stop()
    expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function))
  })

  it('subscribes to custom node keyboard events', () => {
    const el = document.createElement('div')
    const spy = vi.spyOn(el, 'addEventListener')
    const { start } = createCheatsListener({
      onCheat: vi.fn(),
      cheats,
      target: el
    })
    start()
    expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function))
  })

  it('stops listening to custom node keyboard events', () => {
    const el = document.createElement('div')
    const spy = vi.spyOn(el, 'removeEventListener')
    const { stop } = createCheatsListener({
      onCheat: vi.fn(),
      cheats,
      target: el
    })
    stop()
    expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function))
  })

  it('handles keyboard events', () => {
    const onCheat = vi.fn()
    const { start } = createCheatsListener({
      onCheat,
      cheats
    })
    start()
    dispatchKeys(['KeyY', 'KeyE', 'KeyY'])
    expect(onCheat).toHaveBeenCalledWith('yey')
  })
})
