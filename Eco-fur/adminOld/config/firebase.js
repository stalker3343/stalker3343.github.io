'use strict'

module.exports = {
  // default properties that uses unix timestamp as its value, which will be parsed into Datetime string on the page
  timestampProps: [
    'createdAt', 'updatedAt', 'created_at', 'updated_at'
  ],
  DBRoots: [{
      // root property name, example:
      name: ['tovari/shibiNaZaka', 'Шубы на заказ'],
      // array that contains the object properties you'd like to see in the table component as the table header,
      // if nothing were given, the first object's properties that we get from this root will be used to set up table header.
      props: [
        // examples:
        'title',
        'priceNew',
        'priceOld',
        'road'
        // 'updatedAt'
      ],

      // firebase query params supported: limitToFirst, limitToLast, orderByChild
      query: {
        // If neither of limitToFirst nor limitToLast were given, limitToLast: 100 will be applied by default
        limitToLast: 100,
        orderByChild: 'createdAt'
      },

      // stats you'd like to see in the stats panel component, if no stats were given, only the 'total' count (count by '.key') will be displayed.
      // stats object properties that supported are: name:String, countBy:String, unique:Boolean, equalTo:String
      stats: [
        // examples:
        {
          name: 'Товаров',
          countBy: 'id'
        },
        // { name: 'Users', countBy: 'email', unique: true },
        // { name: 'Subscribed', countBy: 'statusVal', equalTo: 'subscribed' }
      ]
    },
    {
      name: ['tovari/shibiVNalichii', 'Шубы в наличии'],
      props: [
        // examples:
        'title',
        'priceNew',
        'priceOld',
        'road'

        // 'updatedAt'
      ],
      props_rus: [
        // examples:
        'название',
        'Новая цена',
        'старая цена',

        // 'updatedAt'
      ],
      query: {
        // If neither of limitToFirst nor limitToLast were given, limitToLast: 100 will be applied by default
        limitToLast: 100,
        orderByChild: 'createdAt'
      },
      stats: [
        // examples:
        {
          name: 'Товаров',
          countBy: 'id'
        },
        // { name: 'Users', countBy: 'email', unique: true },
        // { name: 'Subscribed', countBy: 'statusVal', equalTo: 'subscribed' }
      ]

    }

  ]
}
