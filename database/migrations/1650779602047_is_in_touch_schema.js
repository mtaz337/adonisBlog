'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IsInTouchSchema extends Schema {
  up () {
    this.table('friends', (table) => {
      // alter table
      table.boolean('is_in_touch').defaultTo('false')
    })
  }

  down () {
    this.table('friends', (table) => {
      // reverse alternations
      table.boolean('is_in_touch').defaultTo('false')
    })
  }
}

module.exports = IsInTouchSchema
