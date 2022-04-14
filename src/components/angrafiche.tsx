import { Box, Select, MenuItem, Stack, IconButton, Card, Typography, InputAdornment, TextField, FormControl} from '@mui/material'
import {Table, TableBody, TableCell, TableHead, TableContainer, TableRow, TablePagination } from '@mui/material';
import { useState, useEffect } from 'react';
import { User } from '../models/models'
import {teachersList, studentsList, deleteUser} from '../apis/tutor_call'
// Icone
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const IconeAzioniAngarfica: React.FC = () => {
  return (
    <Stack direction="row" justifyContent="right" spacing={1}>
      <IconButton aria-label="edit">
        <EditTwoToneIcon color="primary" />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteTwoToneIcon color="primary" />
      </IconButton>
    </Stack>
  );
};

interface AnagraficheProps {
    readonly defaultType:string;
    routeCallback(s:string):void;
};
 
export const Anagrafiche: React.FunctionComponent<AnagraficheProps> = (props) => {
    
    //pre Mock-up
    let Data:User[] = []  
    
    const [type, setType] = useState(props.defaultType);

    //Chiamate Api condizionali in base al Props
    function decideCalls(type:string){
      if(type === 'teacher'){
        teachersList().then((response)=> {console.log(response)})
        .catch((error)=>{console.log(error); Data = [user1,user2]});
      }
      else if(type === 'student')
      {
        studentsList().then((response)=> {console.log(response)})
        .catch((error)=>{console.log(error); Data = [user1,user2]});
      }else{
        console.log("Questo è un problema");
      }
    };
    
    useEffect(() => {
      decideCalls(type)
    } )
    
    

  //Mock-up Data

  const user1: User = {
    id: 1,
    user_name: 'pino',
    email: 'user1@mail.com',
    role: 'teacher',
  };

  const user2: User = {
    id: 2,
    user_name: 'giacomo',
    email: 'user2@mail.com',
    role: 'teacher',
  };

  Data = [user1, user2];

    //Hooks
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [righeCorrenti, setRigheCorrenti] = useState<User[]>(Data);
    
  
    //Handler
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const richiediRicerca = (newValChange: string) => {
      const filteredRows = Data.filter((row) => {
        return row.user_name.toLowerCase().includes(newValChange.toLowerCase());
      });
      setRigheCorrenti(filteredRows);
    };

    const deleteRequest = (id:number) =>{
      deleteUser(id).then(() => {decideCalls(type)}).catch((e)=>{console.log(e); decideCalls(type);})
    }
    
    return (<Box>
        <Box display='flex' justifyContent='space-between' alignItems='end' sx={{ pb: 5 }}>
            <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Anagrafica {type} </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField id="input-searchbar" label="Cerca..." variant="outlined" onChange={(e)=>{richiediRicerca(e.target.value.toString())}} InputProps={{startAdornment: (<InputAdornment position="start">
                  <SearchTwoToneIcon fontSize='medium'></SearchTwoToneIcon>
                </InputAdornment>
              )}}/>
            </Box>
        </Box>
        <Card>
            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mx:2, my:1 }}>
              <FormControl>
                <Select
                  defaultValue={type}
                  labelId="role-label"
                  id="role"
                  label="Role"
                  onChange={(e)=>{setType(e.target.value)}}
                >
                  <MenuItem value={'student'}>Student</MenuItem>
                  <MenuItem value={'teacher'}>Teacher</MenuItem>
                </Select>
              </FormControl>
              <IconButton color='primary' aria-label='Add' onClick={()=>{props.routeCallback(type)}}>
                  <AddCircleTwoToneIcon fontSize='large' ></AddCircleTwoToneIcon>
              </IconButton>
            </Box>
            <TableContainer>
                <Table sx={{minWidth: 400, px:5}}>
                    <TableHead>
                        <TableRow >
                            <TableCell align='left'> ID </TableCell>
                            <TableCell align="left"> User_Name </TableCell>
                            <TableCell align="right"> Azioni </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {righeCorrenti.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell >{row.id}</TableCell>
                            <TableCell align="left">
                                {row.user_name}
                            </TableCell>
                            <TableCell align="right">
                              <Stack direction='row' justifyContent='right' spacing={1}>
                                <IconButton onClick={ () => {console.log('Edit Button')}} aria-label="edit">
                                  <EditTwoToneIcon color="primary"/>
                                </IconButton>
                                <IconButton onClick={ () => {deleteRequest(row.id)}} aria-label="delete">
                                  <DeleteTwoToneIcon color="primary"/>
                                </IconButton>
                              </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={Data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}/>       
        </Card>
    </Box>
  );
};
