const movies = require('../../models/movie.js');



module.exports = [
    //fetch
    {
        method:['GET'],
        path:'/movies/{name?}',
        handler:(request,reply)=>{
            if(!request.params.name)
              {
                    movies.findAll(
                        {
                            attributes:['id','Title','Genre','Rating']
                        }
                    )
                    .then(data=>reply(data))
              }
            else{
                movies.findOne({
                    where:{Title:request.params.name},
                    attributes:['id','Title','Genre','Rating']
                })
                .then(data=>{
                    data==null?reply().code(404):reply(data)
                })
            }
        },
    
    }    
]