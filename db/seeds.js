// Seeding data to MongoDB
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Whiskey = require('../models/Whiskey')

const bulleit = new Whiskey({
  title: 'Bulleit Bourbon',
  description: 'Bulleit Bourbon Whiskey allows you to savor the complex flavor and warm finish inspired by the whiskey pioneered by Augustus Bulleit 150 years ago. With its amber color and oaky aroma, our aged whiskey makes a good first impression before it\'s even opened. The flavor profile of our bourbon whiskey combines hints of maple, oak and nutmeg for a dry, well-balanced finish that lingers long after the final sip. Simply combine our bourbon whiskey with cloves, lemon juice, brown sugar and hot water for a comforting Hot Toddy.',
  image: 'https://products2.imgix.drizly.com/ci-bulleit-bourbon-07be0e5c0084bc44.jpeg?auto=format%2Ccompress&fm=jpeg&q=20',
  value: '40.00'
})
const makers = new Whiskey({
  title: 'Maker\'s Mark Bourbon Whisky',
  description: 'Maker\'s Mark started with bread, of course. Bill Samuels bought the Burks\' Distillery in Loretto, Kentucky, in 1953 and did the predictable – just not in a predictable way. He wanted to select the right mashbill for his new Bourbon. He took inspiration from the Old Fitzgerald and W. L. Weller recipes made by Pappy Van Winkle. He did not want to take the time to distill, age and taste each candidate, so he made a loaf of bread from each mix of grain. One had no rye in it. No rye? Samuels liked the loaf without the rye best so he ran with it. The winner contained the customary corn with malted barley and a large dose of red winter wheat. The product is in stark contrast to rye-heavy spirits like Bulleit or Knob Creek. The result is less spicy than the rye-influenced whiskeys. Bring a glass to your nose. You\'ll smell spiced honey, cut fruit and citrus peel. Have a sip. Barley malt, butterscotch and vanilla bean will gradually bloom on your tongue. Wait a moment. The finish is of medium length with gentle caramel and dry oak spice.',
  image: 'https://products0.imgix.drizly.com/ci-makers-mark-bourbon-whisky-8993a9352bde4e36.jpeg?auto=format%2Ccompress&fm=jpeg&q=20',
  value: '25.00'
})

const jack = new Whiskey({
  title: 'Jack Daniel\'s Old No. 7 Tennessee Whiskey',
  description: 'Jack Dani\'s Tennessee Whiskey is the world\'s best selling whiskey, with every bottle distilled and bottled at the Jack Daniel Distillery in Lynchburg, Tennessee, America\'s oldest registered distillery, established in 1866. Made from the finest corn, rye, and barley malt these choice grains are mixed with the iron-free water that flows from the Cave Spring found on the distillery grounds. From there Jack Daniel\'s is charcoal mellowed drop by drop through 10 feet of sugar maple charcoal which imparts our distinct smoothness. Finally, Jack Daniel\'s is matured in handcrafted white oak barrels of our own making.',
  image: 'https://products3.imgix.drizly.com/ci-jack-daniels-old-no-7-92707d5e737cf4ac.jpeg?auto=format%2Ccompress&fm=jpeg&q=20',
  value: '20.00'
})

const woodford = new Whiskey({
  title: 'Woodford Reserve Kentucky Straight Bourbon Whiskey',
  description: 'Woodford Reserve is built around flavor. The art of making fine bourbon first took place on the site of the Woodford Reserve Distillery, a National Historic Landmark, in 1812. The perfectly balanced taste of our Kentucky Straight Bourbon Whiskey is composed of more than 200 detectable flavor notes, from bold grain and wood, to sweet aromatics, spice, and fruit & floral notes.',
  image: 'https://products1.imgix.drizly.com/ci-woodford-reserve-bourbon-c985a76a3eeaa7c2.png?auto=format%2Ccompress&fm=jpeg&q=20',
  value: '40.00'
})

const jim = new User({
  userName: 'jimdoan4',
  password: 'athens',
  sneakers: [bulleit, makers, jack, woodford]
})

User.deleteMany({})
  .then(() => jim.save())
  .then(() => console.log('Saved to MongoDB'))
  .then(() => mongoose.connection.close())
