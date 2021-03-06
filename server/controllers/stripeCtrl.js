const path = require("path")
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const { REACT_APP_STRIPE_SECRET_KEY } = process.env
const stripe = require("stripe")(REACT_APP_STRIPE_SECRET_KEY)

module.exports = {
  stripeCharge: async (req, res) => {
    const { cartTotal, token } = req.body

    const roundTotal = cartTotal.toFixed(0)

    try {
      let { status } = await stripe.charges.create({
        amount: roundTotal,
        currency: "usd",
        description: "An example charge",
        source: token
      })

      res.status(200).send(status)
    } catch (err) {
      res.status(500).end()
    }
  }
}