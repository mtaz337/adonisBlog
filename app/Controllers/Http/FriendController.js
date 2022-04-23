'use strict'
const Friend = use('App/Models/Friend')
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

}

module.exports = FriendController
