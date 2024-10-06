import {useState , useEffect} from 'react';
import {Button , Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate , Link} from 'react-router-dom';
function Cart(props){
    let navigate = useNavigate();
    function changeRoute(){
        navigate('/billing');
    }
    let cart = props.cart;
    return(

        <>
            <ol className='cartWrapper'>
               
               {cart.map(item => {
                return(
                    
                        <div key={item.id} className='nameWrapper'>
                            
                                <div style={{maxWidth:300,width:300}}><li><Typography className='cartText'>{item.name}
                                    </Typography></li> </div>
                                <div style={{width:100}}> <Typography className='cartText'>{item.price}</Typography></div>
                                <div>{item.count}</div>
                                <div><Button color='inherit'  onClick={(e)=>props.removeItem(item.id)}
                                        sx={{backgroundColor:'none'}}
                                    ><DeleteIcon/></Button></div>
                               
                                

                                
                                
                        </div>
                     
                )
               })}
              
            </ol>
            {props.cart[0]!=null ? <Link to='/cart/billing'><Button sx={{marginLeft:85,marginTop:3}} variant='contained'
            
                    >
                Proceed to Billing</Button></Link> : ''}
        </>
    )   
}

export default Cart;