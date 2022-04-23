'use strict'
const Friend = use('App/Models/Friend')

const {validate} = use('Validator')

class FriendController {
  async index({view}){
   
    const friends = await Friend.all()
    return view.render ('friends',{
      title:'Friends backgrounds',
      friends: friends.toJSON()
    })
  }

  async singleFriend({params, view}){
    const friend = await Friend.find(params.id)
    return view.render('SingleFriend',{
      friend: friend
    })
  }
  async add({view}){
    return view.render('addfriend')
  }

  async store({request,response,session}){

    const validation = await validate(request.all(),{
      friendName: 'required|min:3|max:20',
      photo: 'required|min:10|max:255',
      job: 'required|min:4|max:50',
      description: 'required|min:10|max:255',
    })
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }
    const friend = new Friend();

    friend.name = request.input('friendName')
    friend.photo = request.input('photo')
    friend.job = request.input('job')
    friend.descriptions = request.input('description')

    await friend.save()
    session.flash({ notification:'New Friend Added'})

    return response.redirect('/friends/')
  }

  async edit({params,view}){
    const friend = await Friend.find(params.id)
    return view.render('editfriend',{
      friend: friend
    })
   }

   async update({view,params,request,response,session}){
     //adding input validations
    const validation = await validate(request.all(),{
      friendName: 'required|min:3|max:20',
      photo: 'required|min:10|max:255',
      job: 'required|min:4|max:50',
      description: 'required|min:10|max:255',
    })
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

     const friend = await Friend.find(params.id)

     friend.name = request.input('friendName')
     friend.photo = request.input('photo')
     friend.job = request.input('job')
     friend.descriptions = request.input('description')
     
     await friend.save()
     session.flash({notification:'friend Description Edited'})

     return response.redirect('/friends')
   }
   async destroy({params,session,response}){
   const friend = await friend.find(params.id)
   
   await friend.delete()

   session.flash({notification:'A friend Was Delete from The List'})
   return response.redirect('/friends/')
   }

}

module.exports = FriendController
