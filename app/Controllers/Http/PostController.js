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

  async add({view}){
    return view.render('addFruit')
  }
  async store({request,response,session}){
    const fruit = new Fruit();

    fruit.name = request.input('fruitName')
    fruit.photo = request.input('photo')
    fruit.tastes = request.input('taste')
    fruit.description = request.input('description')

    await fruit.save()
    session.flash({ notification:'New Fruit Added'})

    return response.redirect('/fruits/')
  }
}

module.exports = PostController
