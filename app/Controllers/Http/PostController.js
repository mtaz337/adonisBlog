'use strict'

const { post } = require("@adonisjs/framework/src/Route/Manager")

class PostController {
  async index({view}){
    const fruits = [
      {'name':'banana', 'tastes':'it tastes sweet','photo':'https://static.toiimg.com/thumb/79301095.cms?width=680&height=512&imgsize=199058'},
      {'name':'orange', 'tastes':'it tastes sweet-acidic', 'photo':'https://www.fruitsmith.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/o/r/orange_1_.png'},
      {'name':'apple', 'tastes':'it tastes sweet','photo':'https://media.istockphoto.com/photos/red-apple-picture-id157405978?b=1&k=20&m=157405978&s=612x612&w=0&h=55a988_z0DHlgosV57Lwuk9eIrIEnC9cXBt9qCgZ5ak='},
    ]
    return view.render('posts.index',{
      title:'favourite fruits',
      fruits: fruits
    })
  }
}

module.exports = PostController
