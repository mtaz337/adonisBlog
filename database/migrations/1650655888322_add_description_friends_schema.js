'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDescriptionFriendsSchema extends Schema {
  up () {
    this.table('friends', (table) => {
      // alter table
      table.string('descriptions')
    })
  }

  down () {
    this.table('friends', (table) => {
      // reverse alternations
      table.string('descriptions')

    })
  }
}

module.exports = AddDescriptionFriendsSchema
