import Mock from 'mockjs'
var Random = Mock.Random
Mock.mock('/user_xx',
{
   "data|1-10":[{
    "string|1-10": "★",
    "number|1-100": 100,
    "img":Random.image('200x100'),
    "name":'@name()',
    "time":'@time("A HH:mm:ss")'
   }]
})

Mock.mock('/user_yy',
{
    "string|1-10": "★",
    "number|1-100": 100,
    "img":Random.image('200x100'),
    "name":'@name()',
    "time":'@time("A HH:mm:ss")'
})

Mock.mock('/login',
{
    "string|1-10": "★",
    "number|1-100": 100,
    "img":Random.image('200x100'),
    "name":'@name()',
    "time":'@time("A HH:mm:ss")'
})

// Mock.mock('/user_yy',{
//     "array|1-10": [
//         {
//           "name|+1": [
//             "Henllo",
//             "Mocktest",
//             "!"
//           ],
//           "name":'@name()',
//         //   "password|11111-99999":'@password()'
//         }
//       ]
// })
