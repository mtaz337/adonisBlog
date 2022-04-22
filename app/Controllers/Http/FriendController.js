'use strict'

class FriendController {
  async index({view}){
    const friends = [
      {'name':'turzo', 'job':'unity developer','photo':'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'},
      {'name':'rochi', 'job':'business development executive','photo':'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'},
      {'name':'shahin', 'job':'marine','photo':'https://cloudfront.slrlounge.com/wp-content/uploads/2017/06/1960brittany-putnam-andrew0604-800x1200.jpg'},
      {'name':'aminul', 'job':'software engineer','photo':'https://cloudfront.slrlounge.com/wp-content/uploads/2017/06/2brittany-putnam-andrewbw1447.png'}
    ]
    return view.render ('friends',{
      title:'Friends backgrounds',
      friends: friends
    })
  }
}

module.exports = FriendController
