import store from '../store/index'

export default function (to, from, next) {
  if (store.getters.user != null) {
    next()
  } else {
    next('./login?loginError=true')
  }

}