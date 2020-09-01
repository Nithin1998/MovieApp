const movies = require('../../models/movie');
const Joi = require('joi');

module.exports = [
    {
        method:['POST'],
        path:'/movies',
        handler:async (request,reply)=>{
             const dbrow = await movies.sync().then(function () {
                return movies.create({
                  Title: request.payload.title,
                  Genre: request.payload.genre,
                  Rating:request.payload.rating
                            });
                        })
                reply(dbrow.id)
            },
        config:{
            validate:{
                payload:{
                    title:Joi.string(),
                    genre:Joi.string().min(2).max(10),
                    rating:Joi.number().max(5).min(1)
                }
            }
        }    
         
        }
    
]