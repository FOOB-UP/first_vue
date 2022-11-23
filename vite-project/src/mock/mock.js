import Mock from 'mockjs'



var Random = Mock.Random
Mock.mock('/user_xx',
{
   "data":{
    "string|1-10": "★",
    "number|1-100": 100,
    "img":Random.image('hello mock', '#50B347', '#FFF', 'Mock.js'),
   }
})
