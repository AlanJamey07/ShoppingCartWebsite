import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button , Typography} from '@mui/material'
function Billing(props){
    let navigate = useNavigate();
    let [total , setTotal] = useState(0);
        useEffect(()=>{
                    for(let i=0;i<props.cart.length;i++){
                        setTotal(t => parseFloat((props.cart[i].price * props.cart[i].count + t).toFixed(2)));
                    } 
        },[])
        console.log(props.cart);
    return(

        <>
        
        <div className='billFlex'>

                <div className='headWrapper'>
                    <div style={{width:250}}><Typography variant='h5'>Name</Typography></div>
                    <div style={{width:100}}><Typography variant='h5'>Price</Typography></div>
                    <div style={{width:100}}><Typography variant='h5'>Count</Typography></div>
                    <div><Typography variant='h5'>Total Price</Typography></div>
                </div>
           {props.cart.map(item => {
            return(
                <div key={item.id} className='billWrapper'>
                    
                         <div style={{width:250}}><Typography>{item.name}</Typography></div>
                        <div style={{width:115}}><Typography>{item.price}</Typography></div>
                        <div style={{width:100}}><Typography>{item.count}</Typography></div>
                        <div><Typography>{item.price * item.count}</Typography></div>
                       
                       
                        
                </div>
            )
           })}
            <div className='billWrapper'>
                <div style={{width:250}}><Typography>Total Cost</Typography></div>
                <div style={{width:97}}><Typography>_______</Typography></div>
                <div style={{width:118}}><Typography>_______</Typography></div>
                <div style={{color:'indigo'}}><Typography>{total}</Typography></div>
            </div>
                  <Button variant='contained' sx={{marginTop:5}} onClick={(e) => navigate("/cart/billing/greetings")}
                    
                    >Buy</Button>
           </div>
        </>
    )
}

export default Billing;