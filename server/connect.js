const Hapi = require('hapi');
const server = new Hapi.Server();
const Bell = require("bell");
const routes =  require('./config/routes/index')
const Vision = require("vision");
const EJS = require("ejs");
const Cookie = require("hapi-auth-cookie");
const db = require('./config/database');
const sessions = require("./models/session");
const serverinfo = require("./domaininfo/address.json");
//database connection
db.authenticate()
            .then(()=>console.log('Database connected....'))
            .catch((err)=>console.log(err))


async function Connection(){

    server.connection({
        port:8000,
        host:"localhost",
        routes:{cors:true}
    });
    
    await server.register([Bell,Cookie,Vision],err=>{
        if(err) throw err;
    })
    server.views({
        engines: { ejs: EJS },
        relativeTo: __dirname,
        path: 'templates'
    });

     server.auth.strategy('github', 'bell', {
        provider: 'github',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '577e1a606133c936bcae',
        clientSecret: 'b8f0718b80609066147f90bd2b31e1ff06da9d48',
        scope: []
    });
    server.auth.strategy('session', 'cookie',{
        password: 'passwordstringistooshortmin32charactorsrequired', 
        cookie: 'sid', 
        redirectTo: '/signin',
        isSecure:false,
        isSameSite:false,
        validateFunc:  function(request,session,callback){
             sessions.findOne({
                 where:{sessionId:request.state.sid.id,accesstoken:request.state.sid.token}
             }).then(data=>{if(data) return callback(null,true)
                                return callback(null,false)})
        }
    
    });
    //home route

server.route({
    method: ['GET','POST'],
        path: '/login',
        config: {
            auth: {
                strategy: 'github',
                mode:'try'
            },
            handler: async function (request, reply) {
                    if (request.auth.isAuthenticated) {
                        const token = request.auth.credentials.token;
                        const id = request.auth.credentials.profile.id;
                        const obj = {token:token,id:id}
                        request.cookieAuth.set(obj)
                        await sessions.sync().then(function(){
                            return sessions.create({
                                accesstoken:token,
                                sessionId:id
                            })
                        }
                        )
                       reply.redirect('/')
            
                    }
                    
                    
            }
             
        }
})

server.route({
    method:'GET',
    path:'/',
    config:{
        auth:{
                strategy:'session',

        },
    handler: function(request,reply){
           reply.view('index',{data:serverinfo})
    }}
})
server.route({
    method:'GET',
    path:'/signin',
    handler:function(request,reply){
        reply.view('index',{data:serverinfo});
    }
})

//Route for crud operations
server.route(routes);
server.route({
    method:'GET',
    path:'/update/{id?}',
    config:{
            auth:{
                strategy:'session'
            }
    ,
    handler:function(request,reply){
        reply.view('index',{data:serverinfo});
    }
}
})
server.route({
    method:'GET',
    path:'/movie-info/{name?}',
    config:{
        auth:{
            strategy:'session'
        },
    handler:function(request,reply){
            reply.view('index',{data:serverinfo})
    }
}
})
server.route({
    method:'GET',
    path:'/logout',
    handler: async function(request,reply){
       await  sessions.destroy({
            where:{sessionId:request.state.sid.id,
               accesstoken:request.state.sid.token}
        })
        request.cookieAuth.clear()
        reply.redirect('/signin')
    }
})
await server.start((err)=>{
    if(err){
        throw err;
    }
    console.log("Connection started")
})
}

Connection();