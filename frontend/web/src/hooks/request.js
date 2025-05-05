


export async function authenticate( username , password ) {

    console.log(username,password); 
    
    const to_authenticate_user = { 
        user_name : username , 
        password : password 
    }; 

    try { 

        const response = await  fetch(
            "http://127.0.0.1:8000/login" , {
                method : 'POST' , 
                headers : { 
                    "Content-Type": "application/json",
                } , 
                body : JSON.stringify(to_authenticate_user) 
            }
        ) 


        if (!response.ok) { 
            return false  ;
        } else { 
            const data = await response.json()
            return  { 
                data :  data , 
                result : true 
            } 
        }
        
        
    } catch (error) { 
        console.log(error);
        
    }
}




export async function addUser (user)  { 
   

    try { 

        const response = await fetch(
            "http://127.0.0.1:8000/signup" , {
                method : "POST" , 
                headers : { 
                    "Content-Type": "application/json",
                } , 
                body : JSON.stringify(user) 
            }
        ) 

        if (!response.ok) { 
            return false ; 
        }  else { 
            const data = await response.json()
            return { 
                data : data , 
                result : true
            }
        }

    } catch ( error ) { 
        console.log(error);
        
    }

}