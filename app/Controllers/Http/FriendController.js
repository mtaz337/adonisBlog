'use strict'
const Friend = use('App/Models/Friend')
const IntouchFriend = use('App/Models/IntouchFriend')
const Database = use('Database')
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
    
    const friendname = request.input('friendName')
    friend.name = request.input('friendName')
    friend.photo = request.input('photo')
    friend.job = request.input('job')
    friend.descriptions = request.input('description')
    const intouch =  await Database.table('intouch_friends').where('name', friendname).first()
     if(intouch.name===friend.name){
       friend.is_in_touch = true
     }

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
   const friend = await Friend.find(params.id)
   
   await friend.delete()

   session.flash({notification:'A friend Was Delete from The List'})
   return response.redirect('/friends/')
   }

   async addIntouch({view}){
   return view.render('addintouch')
   }

   async storeintouch({view,request, response, session}){
    const validation = await validate(request.all(),{
      name: 'required|min:3|max:20',
    })
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }
    const intouchFriend = new IntouchFriend();

    intouchFriend.name = request.input('name')
    if(request.input('sameage')==='yes'){
      intouchFriend.same_age = true
    }
    await intouchFriend.save()
    session.flash({ notification:'New Intouched Friend Added'})

    return response.redirect('/friends/addintouch/')
   }

}

module.exports = FriendController
