import {useState , useEffect} from 'react';
import {Button , ThemeProvider, Typography , Paper , Grid2 , Dialog} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Watches(props){
   
    let [ open , setOpen] = useState(false);
    let [dialogItem , setdialogItem] = useState({});
    function increaseCount(e , item){
        setdialogItem( {...item , count : item.count + 1})
        
      }

      function decreaseCount(e , item){
        if(item.count == 1){
            return;
        }
        else{
            setdialogItem({...item , count : item.count - 1})
        }
       
      }
    function updateOpen(e , item){
        setOpen(true);
        setdialogItem(item);
    }

    function handleClose(){
        setOpen(false);
    }
    useEffect(()=>{
        async function fetchData(){
                const response = await fetch( 'https://dummyjson.com/products/category/mens-watches');
                const data = await response.json();
                console.log(data.products);
                updateElectronics(data.products);
                
        }

        fetchData();
    },[])
    let [electronics , setElectronics] = useState([]);
    function updateElectronics(data){
        for(let i=0;i<data.length;i++){
                let objects ={
                    id : data[i].id,
                    name : data[i].title,
                    price : data[i].price,
                    image : data[i].images[0],
                    description:data[i].description,
                    count : 1, 
                }

                setElectronics(c => [...c , objects]);
        }
            
    }

  
    
    
   

        return(<>
              
                  <div className='clotheWrapper'>
                    <Grid2 container spacing={2}>

                   
                    {electronics.map(item => {
                        return(
                            
                              
                                    <Grid2 key={item.id} className="Grid2" onClick={(e)=>updateOpen(e , item)}>
                                        
                                        
                                        <img src={item.image} width={100} height={100} ></img>
                                        <div><Typography variant='h6'>{item.name}</Typography></div>
                                        <div>{item.price}</div>
                                        
                                        <Button variant='contained' sx={{marginTop:2,
                                               
                                            }}>Add to Cart</Button>
                                    
                              
                                    </Grid2>
                                          
                                
                              
                           
                        )
                    })}
                     </Grid2>
                  </div> 
                  <Dialog  open={open} onClose={handleClose}>
                    <div className='dialogWrapper'>
                    <div>{dialogItem.name}</div>
                    <img src={dialogItem.image} width={300} height={300}></img>
                        <div style={{display:'flex'}}>
                            <div>{dialogItem.price}
                            </div>
                            <div style={{marginTop:2}}><CurrencyRupeeIcon/></div> 
                        </div>
                        <div style={{fontSize:20,marginTop:5}}>{dialogItem.description}</div>
                        <div className='btWrapper'>    
                        <Button color='inherit' onClick={(e) => decreaseCount(e , dialogItem)}>-</Button>
                        <Button color='inherit' sx={{backgroundColor:'white'}}>{dialogItem.count}</Button>
                        <Button color='inherit' onClick={(e) =>increaseCount(e,dialogItem)}>+</Button>
                        </div>
                        <Button variant='contained' sx={{marginTop:3}} onClick={(e)=>
                        {
                        props.updateCart(e , dialogItem)
                        handleClose();
                        }
                        }

                        >Add to Cart</Button>
                    </div>
                    
                  </Dialog>
                 
                    
        </>)
}

export default Watches;