import { createCheatsListener } from '../src/listener.js'

const { start } = createCheatsListener({
  onCheat: (name) => {
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
