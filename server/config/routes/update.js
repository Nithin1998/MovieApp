const movies = require('../../models/movie.js');
const Joi = require('joi');

module.exports = [
    
    {
        method:['PUT'],
        path:'/movies/{id}',
        handler:async (request,reply)=>{
            const dbrow = await movies.update(
                {Title:request.payload.title, Genre:request.payload.genre,Rating:request.payload.rating},
                {where:{id:request.params.id}}
            )
            if(dbrow[0]){
                reply(request.params.id)
            } 
            else reply(false)
            },
    config:{
        validate:{
            params:{
                id:Joi.number()
            },
            payload:{
                title:Joi.string(),
                genre:Joi.string(),
                rating:Joi.number().min(1).max(5)
            }
        }
    }
    }
]