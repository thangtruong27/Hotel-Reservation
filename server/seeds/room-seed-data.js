

const Room = require('../models/room');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hotel-reservation', { useNewUrlParser: true });

const rooms = [
  new Room({
    id: '0001',
    name: 'single economy',
    type: 'single',
    price: 115,
    size: 200,
    capacity: 1,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
    extras: [
      'Plush pillows and breathable bed linens',
      'Soft, oversized bath towels',
      'Full-sized, pH-balanced toiletries',
      'Complimentary refreshments',
      'Adequate safety/security',
      'Internet',
      'Comfortable beds'
    ],
    images: ['details-1.jpeg', 'room-1.jpeg', 'room-2.jpeg'],
    bookingRef: []
  }),

  new Room({
    id: '0002',
    name: 'single basic',
    slug: 'single-basic',
    type: 'single',
    price: 100,
    size: 200,
    capacity: 1,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
    extras: [
      'Plush pillows and breathable bed linens',
      'Soft, oversized bath towels',
      'Full-sized, pH-balanced toiletries',
      'Complimentary refreshments',
      'Adequate safety/security',
      'Internet',
      'Comfortable beds'
    ],
    images: ['details-2.jpeg', 'room-3.jpeg', 'room-4.jpeg', 'room-5.jpeg'],
    bookingRef: []
  }),

  new Room({
    id: '0003',
    name: 'single starndard',
    slug: 'single-starndard',
    type: 'single',
    price: 100,
    size: 200,
    capacity: 1,
    pets: true,
    breakfast: true,
    featured: false,
    description:
      'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
    extras: [
      'Plush pillows and breathable bed linens',
      'Soft, oversized bath towels',
      'Full-sized, pH-balanced toiletries',
      'Complimentary refreshments',
      'Adequate safety/security',
      'Internet',
      'Comfortable beds'
    ],
    images: ['details-3.jpeg', 'room-5.jpeg', 'room-6.jpeg', 'room-2.jpeg'],
    bookingRef: []
  }),

  new Room({
    id: '0004',
    name: 'single deluxe',
    slug: 'single-deluxe',
    type: 'single',
    price: 300,
    size: 400,
    capacity: 1,
    pets: true,
    breakfast: true,
    featured: false,
    description:
      'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
    extras: [
      'Plush pillows and breathable bed linens',
      'Soft, oversized bath towels',
      'Full-sized, pH-balanced toiletries',
      'Complimentary refreshments',
      'Adequate safety/security',
      'Internet',
      'Comfortable beds'
    ],
    images: ['details-4.jpeg', 'room-5.jpeg', 'room-2.jpeg'],
    bookingRef: []
  })
]

var done = 0;
for (var i = 0; i < rooms.length; i++) {
  rooms[i].save(function (err, result) {
    done++;
    if (done === rooms.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
