import {useState , useEffect} from 'react'
import {TableContainer , Table , TableHead , 
    TableBody , TableRow , TableCell,
    Paper
} from '@mui/material'
import tabledata from './TableData.json'
function MuiTable(){
    let {tableData , settableData} = useState([]);
    function updatetableData(){
        const object = {
            id : data.id,
            firstName : data.first_name,
            lastName : data.last_name,
            email : data.email
        }
        settableData(data => [...data , object]);

    }
    return(
        <TableContainer component ={Paper} elevation={4}
        sx={{maxWidth:500, alignItems:'center'}}
       >
            <Table aria-label ='simple table' >
                <TableHead>
                    <TableRow>
                        <TableCell>Select</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>FirstName</TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                    </TableHead> 
                    <TableBody>
                       {
                        tabledata.map((row)=>{
                            return(
                            <TableRow key={row.id}>
                                    <TableCell><input type="checkbox"></input></TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                            </TableRow>
                            )
                        })
                       }
                    </TableBody>

            </Table>

        </TableContainer>
    )
}

export default MuiTable;
