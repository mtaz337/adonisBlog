'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IntouchFriendsSchema extends Schema {
  up () {
    this.create('intouch_friends', (table) => {
      table.increments()
      table.string('name')
      table.boolean('same_age').defaultTo('false')
      table.timestamps()
    })
  }

  down () {
    this.drop('intouch_friends')
    table.string('name')
    table.boolean('same_age').defaultTo('false')
  }
}

module.exports = IntouchFriendsSchema
