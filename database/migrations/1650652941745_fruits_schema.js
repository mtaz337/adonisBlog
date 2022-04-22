'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FruitsSchema extends Schema {
  up () {
    this.create('fruits', (table) => {
      table.increments()
      table.string('name')
      table.string('tastes')
      table.string('photo')
      table.timestamps()
    })
  }

  down () {
    this.drop('fruits')
  }
}

module.exports = FruitsSchema
