import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'mdi',
  position: 'bottom-right'
})

Vue.toasted.register('notice', (payload) => {
  return payload
}, {
  icon: 'mdi-bell',
  duration: 4000,
  action: {
    text: '닫기',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})
