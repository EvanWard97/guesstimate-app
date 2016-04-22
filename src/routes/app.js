import app from 'ampersand-app'
import Router from './router'
import * as segment from '../server/segment/index.js'
import * as sentry from '../server/sentry/index.js'
import engine from 'gEngine/engine.js'
import {setupGuesstimateApi} from 'servers/guesstimate-api/constants.js'
import './main.css'

import Worker from 'worker!../lib/guesstimator/samplers/simulator-worker/index.js'
window.workers = [new Worker, new Worker]

app.extend({
  init () {
    window.intercomSettings = {
      app_id: "o0trb1v9"
    };
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/o0trb1v9';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
    segment.initialize()
    sentry.initialize()
    this.router = new Router()
    this.router.history.start()
    //This just exists to help people get their api tokens
    window.get_profile = engine.me.localStorage.get
  }
})

app.init()
