'use strict'

const { post } = require("@adonisjs/framework/src/Route/Manager")
const Fruit = use('App/Models/Fruit')
//adding the validator
const {validate} = use('Validator')
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
    //adding input validations
    const validation = await validate(request.all(),{
      fruitName: 'required|min:3|max:20',
      photo: 'required|min:10|max:255',
      taste: 'required|min:4|max:50',
      description: 'required|min:10|max:255',
    })
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const fruit = new Fruit();

    fruit.name = request.input('fruitName')
    fruit.photo = request.input('photo')
    fruit.tastes = request.input('taste')
    fruit.description = request.input('description')

    await fruit.save()
    session.flash({ notification:'New Fruit Added'})

    return response.redirect('/fruits/')
  }

  async edit({params,view}){
    const fruit = await Fruit.find(params.id)
    return view.render('editFruit',{
      fruit: fruit
    })
   }

   async update({view,params,request,response,session}){
     //adding input validations
    const validation = await validate(request.all(),{
      fruitName: 'required|min:3|max:20',
      photo: 'required|min:10|max:255',
      taste: 'required|min:4|max:50',
      description: 'required|min:10|max:255',
    })
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

     const fruit = await Fruit.find(params.id)

     fruit.name = request.input('fruitName')
     fruit.photo = request.input('photo')
     fruit.tastes = request.input('taste')
     fruit.description = request.input('description')
     
     await fruit.save()
     session.flash({notification:'Fruit Description Edited'})

     return response.redirect('/fruits')
   }
   async destroy({params,session,response}){
   const fruit = await Fruit.find(params.id)
   
   await fruit.delete()

   session.flash({notification:'A Fruit Was Delete from The List'})
   return response.redirect('/fruits/')
   }
  
}

module.exports = PostController
