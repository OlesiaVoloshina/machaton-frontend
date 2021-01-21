const middleware = {}

middleware['checkout'] = require('../middleware/checkout.js')
middleware['checkout'] = middleware['checkout'].default || middleware['checkout']

export default middleware
