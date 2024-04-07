import { createCheatsListener } from '../src/listener'

const { start } = createCheatsListener({
  handle: (name) => {
    alert(name.toUpperCase())
  },
  cheats: {
    hesoyam: 117499400,
    seaways: 117662217,
    aspirin: 117468677,
    panzer: 100663304
  }
})
start()
