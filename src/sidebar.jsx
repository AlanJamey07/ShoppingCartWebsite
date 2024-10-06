import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button , Paper , List , ListItem , ListItemButton , ListItemIcon , ListItemText} from '@mui/material';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'
import WatchIcon from '@mui/icons-material/Watch';;
function SideBar(){
    return(
        <>
            <div className='categoryWrapper'>
                <Paper elevation={2} className='Paper' >
                    <div className='ListHeading'>
                        Category
                    </div>

                
                    <List >
                        <ListItem>
                          <Link to='/'>
                            <ListItemButton >
                                <ListItemIcon>
                                <AccessibilityNewOutlinedIcon/>
                                </ListItemIcon>
                               
                                 <ListItemText primary="Clothing"/>
                             
                               
                            </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                         <Link to="/Watches" >
                            <ListItemButton >
                                <ListItemIcon>
                                <WatchIcon/>
                                </ListItemIcon>
                               
                                <ListItemText primary="Watches"/>
                              
                               
                            </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                        <Link to="/shoes" >
                            <ListItemButton>
                                <ListItemIcon>
                                <RollerSkatingOutlinedIcon/>
                                </ListItemIcon>
                            
                                <ListItemText primary="Shoes"/>
                            
                                
                            </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                        <Link to='/furniture'>
                            <ListItemButton >
                                <ListItemIcon>
                                <ChairOutlinedIcon />
                                </ListItemIcon>
                            
                                <ListItemText primary="Furniture"/>
                              
                               
                               
                                
                            </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                    </Paper>
            </div>
        </>
    )
}

export default SideBar; 