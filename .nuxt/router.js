import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _289541a6 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _297c8b75 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _20cf7de8 = () => interopDefault(import('../pages/Checkout/OrderReview.vue' /* webpackChunkName: "" */))
const _224721cc = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _497b20b0 = () => interopDefault(import('../pages/Checkout/PersonalDetails.vue' /* webpackChunkName: "" */))
const _2f1c5ed8 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _18aa2a7f = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _4cc0bbe4 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _412f2942 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _2da53d04 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _6ad3e389 = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _4b866382 = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _5363b4b0 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _ca32d3bc = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _26cb84e3 = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _36ddcb47 = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _30c3bae0 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _289541a6,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _297c8b75,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _20cf7de8,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _224721cc,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _497b20b0,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _2f1c5ed8,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _18aa2a7f,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _297c8b75,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _20cf7de8,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _224721cc,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _497b20b0,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _2f1c5ed8,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _18aa2a7f,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _4cc0bbe4,
    name: "home___de"
  }, {
    path: "/Home",
    component: _4cc0bbe4,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _412f2942,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _2da53d04,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _6ad3e389,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _4b866382,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _5363b4b0,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _ca32d3bc,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _26cb84e3,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _36ddcb47,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _30c3bae0,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _289541a6,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _297c8b75,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _20cf7de8,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _224721cc,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _497b20b0,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _2f1c5ed8,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _18aa2a7f,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _297c8b75,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _20cf7de8,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _224721cc,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _497b20b0,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _2f1c5ed8,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _18aa2a7f,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _4cc0bbe4,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _412f2942,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _2da53d04,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _6ad3e389,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _4b866382,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _5363b4b0,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _ca32d3bc,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _26cb84e3,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _36ddcb47,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _30c3bae0,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _412f2942,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _30c3bae0,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _289541a6,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _412f2942,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _30c3bae0,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _289541a6,
    name: "category___en"
  }, {
    path: "/",
    component: _4cc0bbe4,
    name: "home___en"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
