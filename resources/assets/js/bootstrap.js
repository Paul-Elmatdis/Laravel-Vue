import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import Ls from './services/ls'
import VuePrism from 'vue-prism'
import VTooltip from 'v-tooltip'

/**
 * Global css plugins
 */
import 'vue-tabs-component/docs/resources/tabs-component.css'

/**
 * Global plugins
 */
global.notie = require('notie')
global.toastr = require('toastr')
window._ = require('lodash')

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue')

// Vue.directive('tooltip', VTooltip)
// Vue.directive('close-popover', VClosePopover)
// Vue.component('v-popover', VPopover)
/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

window.axios = require('axios')

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

/**
 * Interceptors
 */

window.axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const AUTH_TOKEN = Ls.get('auth.token')

  if (AUTH_TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// })

require('./helpers/directives')

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VuePrism)
Vue.use(VTooltip)
