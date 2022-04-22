'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDescriptionFruitsSchema extends Schema {
  up () {
    this.table('fruits', (table) => {
      // alter table
      table.string('description')
    })
  }

  down () {
    this.table('fruits', (table) => {
      // reverse alternations
      table.string('description')
    })
  }
}

module.exports = AddDescriptionFruitsSchema
