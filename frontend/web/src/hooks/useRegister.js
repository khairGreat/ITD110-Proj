
import { useState, useEffect  } from "react"


export const useRegister = () => { 

    const [ first_name , setFirstName ] = useState("") ; 
    const [ last_name , setLastName] = useState("")
    const [ birthdate , setBirthdate ] = useState("") 


    useEffect(()=> { 
        console.log(`first name: ${first_name }`);
        console.log(`last name: ${last_name}`);
        console.log(`Birthdate: ${birthdate}`);
    },[first_name, last_name, birthdate])

    return { 
        first_name , last_name , setFirstName , setLastName ,
        birthdate , setBirthdate 
    }


}