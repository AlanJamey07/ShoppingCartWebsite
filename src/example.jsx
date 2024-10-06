import { useEffect, useState } from "react"
import {Button} from '@mui/material'
export default function Example(){
       let [count , setCount] = useState(0);
       let [countobj , setCountObj] = useState({
        Name : 'alan',
        age : 21 , 
        count : 0,
       });
       function updateCountObj(){
        
        setCountObj( {...countobj , count : countobj.count + 1 });
        console.log(countobj.count);
       }
       function updateCount(e){
        setCount(count + 1);
        console.log(count);
       }
    return (
        <>
                <Button onClick={(e) => updateCount(e)} color="white">{count}</Button>
                <Button onClick={(e) =>  updateCountObj(e)} color="white">{countobj.count}</Button>
        </>
    )
} 