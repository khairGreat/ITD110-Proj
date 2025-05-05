import { useState, useEffect  } from "react" ; 



export function useVerify() {

    
    const [ user_name  , setUsername ] = useState("") ;
    const [ password , setPassword ] = useState("")

    useEffect(()=> {
        console.log(`username: ${user_name}`);
        console.log(`password: ${password}`);
    }, [user_name, password])

    return { user_name , password, setUsername, setPassword } ; 
}


