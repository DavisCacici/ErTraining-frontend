import { Box,Typography, InputAdornment, TextField, Card, IconButton, Tabs, Tab} from '@mui/material'
import { User } from '../models/models'
import { teachersList, studentsList, deleteUser } from '../apis/tutor_call'
import { useState, useEffect, useRef, useCallback } from 'react';
import { AnagraficaContent } from './anagraficheContent';
// Icone

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import CoPresentTwoToneIcon from '@mui/icons-material/CoPresentTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';


interface AnagraficheProps {
    readonly defaultType:string;
    routeCallback(s:string):void;
};
 
export const Anagrafiche: React.FunctionComponent<AnagraficheProps> = (props) => {
    
    //pre Mock-up
    let Data:User[] = []  
    
    const [type, setType] = useState(' ');

    //Chiamate Api condizionali in base al Props
    function decideCalls(type:string){
      if(type === 'teacher'){
        teachersList().then((response)=> {console.log(response)})
        .catch((error)=>{console.log(error); Data = [user1,user2]; setDataEnd(Data);});
      }
      else if(type === 'student')
      {
        studentsList().then((response)=> {console.log(response)})
        .catch((error)=>{console.log(error); Data = [user1,user2]; setDataEnd(Data)});
      }else{
        console.log("Questo è un problema");
      }
    };

    const refershApi = useCallback(
      (type) => {
        decideCalls(type);
      }, []) 

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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setType(newValue);
    refershApi(newValue);
  };

  const [DataEnd, setDataEnd] = useState<User[]>([]);

  const [chiaveDiRicerca, setchiaveDiRicerca] = useState<string|undefined>()


  

    return (
    <Box>
        <Box display='flex' justifyContent='space-between' alignItems='end' sx={{ pb: 5 }}>
            <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Anagrafiche</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField id="input-searchbar" label="Cerca..." variant="outlined" onChange={(e)=>{setchiaveDiRicerca(e.target.value.toString()) ; console.log(chiaveDiRicerca);}} InputProps={{startAdornment: (<InputAdornment position="start">
                  <SearchTwoToneIcon fontSize='medium'></SearchTwoToneIcon>
                </InputAdornment>
              )}}/>
            </Box>
        </Box>
      <Card>
        <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mx:2, my:1 }}>
          <Tabs value={type} onChange={handleChange} aria-label="icon label tabs example">
            <Tab value={'student'} icon={<SchoolTwoToneIcon />} label="STUDENTS" />
            <Tab value={'teacher'} icon={<CoPresentTwoToneIcon />} label="TEACHERS" />
          </Tabs>
          <IconButton color='primary' aria-label='Add' onClick={()=>{console.log('route to Add User')}}>
              <AddCircleTwoToneIcon fontSize='large' ></AddCircleTwoToneIcon>
          </IconButton>
        </Box>
          <AnagraficaContent search={chiaveDiRicerca} tableData={DataEnd} type={type}></AnagraficaContent>
      </Card>
    </Box>
  );
};
