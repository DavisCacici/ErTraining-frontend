import { useState } from 'react';
import { Box, Stack, IconButton} from '@mui/material'
import {Table, TableBody, TableCell, TableHead, TableContainer, TableRow, TablePagination } from '@mui/material';
import { User } from '../models/models'
import _ from "lodash";

//icone
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { deleteUser } from '../apis/tutor_call';


interface AnagraficheContentProps {
    readonly tableData:User[];
    readonly type:string;
    readonly search:string|undefined;
    decideCall():void;
};


export const AnagraficaContent:React.FunctionComponent<AnagraficheContentProps> = (props) => {

    //Hooks
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    
  
    //Handler
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const deleteRequest = (id:number) =>{
      deleteUser(id).then(() => {props.decideCall()}).catch((e)=>{console.log(e); props.decideCall();})
    } 

    const richiediRicerca = (): User[] =>{
        if(filterIfRequired(props.search)){
          const filteredRows = props.tableData.filter((row) => {
            return row.user_name.toLowerCase().includes((props.search as string).toLocaleLowerCase());
            });
          if(filteredRows !== props.tableData){
            return filteredRows;
          }else{
            return props.tableData;
          }  
        }else{
          return props.tableData;
        }
        
    };
    
    function filterIfRequired(key:string|undefined):boolean{
        return typeof(key) === 'string'? true: false;
    }

    return(
    <Box>
        <TableContainer>
            <Table sx={{minWidth: 400, px:5}}>
                <TableHead>
                    <TableRow >
                        <TableCell align='left'> ID </TableCell>
                        <TableCell align="left"> User_Name </TableCell>
                        <TableCell align="left"> Email </TableCell>
                        <TableCell align="right"> Azioni </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_.map(richiediRicerca(), (row, index) => {
                    return <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell >{row.id}</TableCell>
                        <TableCell align="left">
                            {row.user_name}
                        </TableCell>
                        <TableCell align="left">
                            {row.email}
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction='row' justifyContent='right' spacing={1}>
                            <IconButton onClick={ () => {console.log('Edit Button')}} aria-label="edit">
                              <EditTwoToneIcon color="primary"/>
                            </IconButton>
                            <IconButton onClick={ () => deleteRequest(row.id)} aria-label="delete">
                              <DeleteTwoToneIcon color="primary"/>
                            </IconButton>
                          </Stack>
                        </TableCell>
                    </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}/>       
    </Box>
    )
};