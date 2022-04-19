import { Box,Typography, InputAdornment, TextField, Card, IconButton, Tabs, Tab} from '@mui/material'
import { User } from '../models/models'
import { teachersList, studentsList, tutorsList } from '../apis/tutor_call'
import { useState, useCallback } from 'react';
import { AnagraficaContent } from './anagraficheContent';
import _ from "lodash";
// Icone

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import CoPresentTwoToneIcon from '@mui/icons-material/CoPresentTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';


interface AnagraficheProps {
    readonly defaultType:string;
    routeCallback(s?:string,u?:User):void;
};
 
export const Anagrafiche: React.FunctionComponent<AnagraficheProps> = (props) => {
    
    const [type, setType] = useState('');

    //Chiamate Api condizionali in base al Props
    function decideCalls(type:string){
      if(type === 'teacher'){
        teachersList().then((res)=> {
          setDataEnd(res.data.data as User[]);  
          console.log(res.data.data);    
        })
        .catch((error)=>{console.log(error); setDataEnd([user1])});
      }
      else if(type === 'student')
      {
        studentsList().then((res)=> {
          const data: User[] = res.data.data;
          setDataEnd(data);
          console.log(data);
        })
        .catch((error)=>{console.log(error);});
      }else if(type === 'tutor'){
          tutorsList().then((res)=> {
            const data: User[] = res.data.data;
            setDataEnd(data);
            console.log(data);
          })
          .catch((error)=>{console.log(error);});
      }else{
        console.log("Questo è un problema");
      }
    };

    const refershApi = useCallback(
      (type) => {
        decideCalls(type);
      }, []) 

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setType(newValue);
    refershApi(newValue);
  };

  const user1: User = {
    id: 1,
    user_name: 'pino',
    email: 'user1@mail.com',
    role: 'teacher',
  };

  const [DataEnd, setDataEnd] = useState<User[]>([]);

  const [chiaveDiRicerca, setchiaveDiRicerca] = useState<string|undefined>()


  

    return (
    <Box>
        <Box display='flex' justifyContent='space-between' alignItems='end' sx={{ mb:5 }}>
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
            <Tab value={'tutor'} icon={<ManageAccountsTwoToneIcon  />} label="TUTORS" />
          </Tabs>
          <IconButton color='primary' aria-label='Add' onClick={()=>{props.routeCallback(type)}}>
              <AddCircleTwoToneIcon fontSize='large' ></AddCircleTwoToneIcon>
          </IconButton>
        </Box>
          <AnagraficaContent search={chiaveDiRicerca} tableData={DataEnd} type={type} decideCall={() => refershApi(type)} routeToCreateOrEdit={(e:User) => {props.routeCallback(type, e)}}></AnagraficaContent>
      </Card>
    </Box>
  );
};
