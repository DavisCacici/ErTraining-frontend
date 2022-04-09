import { Box,  Stack, IconButton, Card, Typography, InputAdornment, TextField,} from '@mui/material'
import {Table, TableBody, TableCell, TableHead, TableContainer, TableRow, TablePagination } from '@mui/material';
import { useState } from 'react';
import { User } from '../models/models'
import L from 'lodash'
import {teachersList, studentsList} from '../apis/tutor_call'
// Icone
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const IconeAzioniAngarfica: React.FC = () => {
    return (
      <Stack direction='row' justifyContent='right' spacing={1}>
        <IconButton aria-label="edit">
          <EditTwoToneIcon color="primary"/>
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteTwoToneIcon color="primary"/>
        </IconButton>
      </Stack>
    );
  };



interface AnagraficheProps {
    readonly type:string;
}
 
export const Anagrafiche: React.FunctionComponent<AnagraficheProps> = (props) => {
    //pre Mock-up
    let Data:User[] = []  
  
    //Chiamate Api condizionali in base al Props
    {/*if(props.type === 'teacher'){
      Data = teachersList();
    }
    else if(props.type === 'student')
    {
      Data= studentsList();
    }else{
      console.log("Questè è un problema");
    } */}

    //Mock-up Data

    const user1:User = {
        id: 1 ,
        user_name: 'pino',
        email: 'user1@mail.com' ,
        role: 'teacher'
    };

    const user2:User = {
        id: 2 ,
        user_name: 'giacomo',
        email: 'user2@mail.com' ,
        role: 'teacher'
    };

    Data = [user1,user2]

    //Hooks
    //const [type, setType] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [righeCorrenti, setRigheCorrenti] = useState<User[]>(Data);
    const [valoreRicerca, setValoreRicerca] = useState<string>("");
  
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
    
    return <Box>
        <Box display='flex' justifyContent='space-between' alignItems='end' sx={{ pb: 5 }}>
            <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Anagrafica {props.type} </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField id="input-searchbar" label="Cerca..." variant="outlined" onChange={(e)=>{setValoreRicerca(e.target.value.toString()); richiediRicerca(e.target.value.toString());}} InputProps={{startAdornment: (<InputAdornment position="start">
                  <SearchTwoToneIcon fontSize='medium'></SearchTwoToneIcon>
                </InputAdornment>
              ),}}/>
            </Box>
        </Box>
        <Card>
            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mx:2,my:1 }}>
                <Typography  textAlign='left' variant="h6" fontWeight='bold'>{props.type}</Typography>
                <IconButton color='primary' aria-label='Add' onClick={()=>{console.log("Button Test")}}>
                    <AddCircleTwoToneIcon fontSize='large' ></AddCircleTwoToneIcon>
                </IconButton>
            </Box>
            <TableContainer>
                <Table sx={{minWidth: 400}}>
                    <TableHead>
                        <TableRow >
                            <TableCell align='left'> User_Name </TableCell>
                            <TableCell align="center"> ID </TableCell>
                            <TableCell align="right"> Azioni </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {righeCorrenti.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.user_name}
                            </TableCell>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="right">
                                <IconeAzioniAngarfica></IconeAzioniAngarfica>
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
};
