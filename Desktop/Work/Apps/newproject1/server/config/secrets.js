module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || 'change this',

  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || ''
  },

  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || 'sk_test_GlGMs2wVbN8hEipIOI98KS9K',
    stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_test_5RB4yYYDfoYcvmUdfsQ1V2s1',
    defaultPlan: 'free',
    plans: ['free', 'silver', 'gold', 'platinum'],
    planData: {
      'free': {
        name: 'Free',
        price: 0
      },
      'silver': {
        name: 'Silver',
        price: 9
      },
      'gold': {
        name: 'Gold',
        price: 19
      },
      'platinum': {
        name: 'Platinum',
        price: 29
      }
    }
  },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};
