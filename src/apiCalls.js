const url = "http://localhost:8000/movies"
 

//Fetches the data from the api
export  async function getData(id=null)
{  
      return   fetch(id?`${url}/${id}`:url)    
        .then(res=>res.json())
        .then(data=>data)
        .catch(err=>console.log(err))  
}

export async function postdata(id=null,title,genre,rating){

      return   fetch(id?`${url}/${id}`:url,
      {
        method:`${id?'PUT':'POST'}`,
        body: JSON.stringify(
            {
              title:title,
              genre:genre,
              rating:rating,
            }
          )   ,
          headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
       }
         
      ) 
     }
    

  