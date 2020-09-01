const movies = require('../../models/movie.js')
const Joi = require('joi');


module.exports = [
    {   
        method:['DELETE'],
        path:'/movies/{id}',
        handler:async (request,reply)=>{
            const destroy = await  movies.destroy({
                where:{id:request.params.id}
            })
           destroy?reply(true):reply(false)
        },
        config:{
           validate:{ params:{
                id:Joi.number()
            }
        }
        }
    }
]