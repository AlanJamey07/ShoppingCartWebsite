import {useState , useEffect} from 'react';
import {Button , ThemeProvider, Typography , Paper , Grid2 , Dialog} from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Clothing(props){
    let [ open , setOpen] = useState(false);
    let [dialogItem , setdialogItem] = useState({});
    function increaseCount(e , item){
        setdialogItem( {...item , count : item.count + 1 });
        console.log(item.count);
        
      }

      function decreaseCount(e , item){
        setdialogItem({...item , count : item.count -1 })
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
                const response = await fetch( 'https://dummyjson.com/products/category/mens-shirts');
                const data = await response.json();
                console.log(data.products);
                updateClothes(data.products);
                
        }

        fetchData();
    },[])
    let [clothes , setClothes] = useState([]);
    function updateClothes(data){
        for(let i=0;i<data.length;i++){
                let object ={
                    id : data[i].id,
                    name : data[i].title,
                    price : data[i].price,
                    image : data[i].images[0],
                    description:data[i].description,
                    count : 1,
                }

                setClothes(c => [...c , object]);
        }
            
    }
      

        return(<>
              
                  <div className='clotheWrapper'>
                    <Grid2 container spacing={2}>

                   
                    {clothes.map(clothe => {
                        return(
                            
                              
                                    <Grid2 key={clothe.id} className="Grid2" onClick={(e)=>updateOpen(e , clothe)}>
                                        
                                        <img src={clothe.image} width={100} height={100} ></img>
                                        <div><Typography variant='h6'>{clothe.name}</Typography></div>
                                        <div>{clothe.price}</div>
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
                        <Button variant='contained' sx={{marginTop:3}}
                            onClick={(e)=> {
                                props.updateCart(e , dialogItem);
                                handleClose();
                            }}
                        >Add to Cart</Button>
                    </div>
                    
                  </Dialog>
                
        </>)
}

export default Clothing;