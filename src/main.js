// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('gridsome-plugin-remark-prismjs-all/themes/night-owl.css')

import { faGithub, faTwitter, faDiscord, faJs, faVuejs, faGolang, faCss3, faNode } from '@fortawesome/free-brands-svg-icons'
import { faAt, faDatabase, faBars, faLink, faEye, faCodeFork } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function (Vue, { router, head, isClient }) {

  library.add(faGithub, faTwitter, faDiscord, faJs, faVuejs, faGolang, faCss3, faAt, faDatabase, faNode, faBars, faLink, faEye, faCodeFork)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('AppIcon', FontAwesomeIcon)
}
