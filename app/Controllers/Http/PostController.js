'use strict'

const { post } = require("@adonisjs/framework/src/Route/Manager")
const Fruit = use('App/Models/Fruit')
class PostController {
  async index({view}){
    const fruits = await Fruit.all()
    return view.render('posts.index',{
      title:'favourite fruits',
      fruits: fruits.toJSON()
    })
  }

  async detailedFruit({params,view}){
   const fruit = await Fruit.find(params.id)
   return view.render('fruitdetail',{
     fruit: fruit
   })
  }
}

module.exports = PostController
