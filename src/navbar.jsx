import {useState , useEffect} from 'react';
import {Button} from '@mui/material'
import {AppBar , Toolbar , IconButton} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { createTheme , ThemeProvider , Badge} from '@mui/material';
import { purple } from '@mui/material/colors';
import {red} from '@mui/material/colors'
import {pink} from '@mui/material/colors'
import { Typography } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'


function NavBar(props){
    const theme = createTheme({
        palette:{
            
            primary:{
                main:purple[300]
                 
              
               
            },
            secondary:{
                main:pink[900],
            }
        },
        components:{
            MuiButton:{
                defaultProps:{
                    
                }
            }
        }
    })
    return(
        <>
        <ThemeProvider theme={theme}>
                    <div className='navbarWrapper'>
                <Typography variant='h4' className='Typography'>Products</Typography>
                <Link to="/cart">
                <Button color='primary.main' sx={{marginRight:5,
                    
                    
                }} startIcon={<Badge badgeContent={props.cart.length}><ShoppingCartIcon/></Badge>} className='Button'>CART</Button>
                </Link>
             
        </div>
        </ThemeProvider>
    
          
        </>
    )
}

export default NavBar;