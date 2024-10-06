import React , { useState } from 'react'
import {Routes , Route } from 'react-router-dom'
import SideBar from './sidebar.jsx'
import NavBar from './navbar.jsx'
import Clothing from './Clothing.jsx'
import { createTheme  , ThemeProvider } from '@mui/material'
import Billing from './billing.jsx'
import Furniture from './furniture.jsx'
import Shoes from './shoes.jsx'
import Watches from './Watches.jsx'
import Cart from './cart.jsx'
import {  indigo} from '@mui/material/colors'
import Greetings from './Greetings.jsx'


function App() {
     const theme = createTheme({
      palette:{
        primary:{
          main:indigo[700],
        }
      },
      components:{
        MuiButton:{
          defaultProps:{
            sx:{
              backgroundColor:'primary.main',
             
            },
            disableRipple:true,
            
          }
        },
       
      }
     })
      let [cart , setCart] = useState([]);
      function updateCart(e , item){
        console.log(item);
        setCart(c => [...c , item]);
      }
    

      function removeItem(id){
          const updatedCart = cart.filter((item) => id!==item.id);
          setCart(updatedCart);
      }
    
  return (
    <>
   <ThemeProvider theme={theme}>
   <SideBar/>
      <NavBar cart={cart}/>
    
      <Routes>
        <Route path="/" element={<Clothing updateCart={updateCart}/>}></Route>
        <Route path="/Watches" element={<Watches updateCart={updateCart}/>}> </Route>
        <Route path="/billing" element={<Billing updateCart = {updateCart}/>}></Route>
        <Route path="/furniture" element={<Furniture updateCart={updateCart}/>}></Route>
        <Route path="/shoes" element={<Shoes updateCart={updateCart} />}></Route>
        <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem}/>}></Route>
        <Route path="/cart/billing" element={<Billing cart={cart}/>}></Route>
        <Route path="/cart/billing/greetings" element={<Greetings/>}></Route>
      </Routes>
     
  
   </ThemeProvider>
    
    
      
  
      
    </>
  )
}

export default App
 