'use strict'

const PostController = require('../app/Controllers/Http/PostController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.get('/friends/add','FriendController.add')

Route.delete('/fruits/:id', 'PostController.destroy')

Route.get('/fruits', 'PostController.index')

Route.get('/fruits/add','PostController.add')

Route.post('/fruits/','PostController.store')

Route.put('/fruits/:id', 'PostController.update')

Route.get('fruits/edit/:id', 'PostController.edit')

Route.get('/fruits/:id', 'PostController.detailedFruit')

Route.get('/friends', 'FriendController.index')

Route.put('/friends/:id', 'FriendController.update')

Route.get('friends/edit/:id', 'FriendController.edit')

Route.delete('/friends/:id', 'FriendController.destroy')

Route.post('/friends/','FriendController.store')

Route.get('/friends/:id', 'FriendController.singleFriend')
