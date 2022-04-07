import { Box,  Stack , Checkbox, FormControl, FormControlLabel, IconButton, Card, CardContent, Typography, CardActions, TextField, CardMedia, Grid, Select} from '@mui/material'
import {Table, TableBody, TableCell, TableHead, TableContainer, TableRow } from '@mui/material';
import { useState } from 'react';
import { User, Role } from '../models/models'
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

    const [type, setType] = useState('');

    const ruoloTeacher:Role = {
        id: 0, 
        name: "teacher",
        description: "pessima descrizione"
    }

    const user1:User = {
        id: 1 ,
        user_name: 'username1',
        email: 'user1@mail.com' ,
        token: 'string',
        last_request: new Date(),
        role: ruoloTeacher
    };

    const user2:User = {
        id: 2 ,
        user_name: 'username2',
        email: 'user2@mail.com' ,
        token: 'string',
        last_request: new Date(),
        role: ruoloTeacher
    };

    const Data:User[] = [user1,user2]
    

    return <Box>
        <Box display='flex' justifyContent='space-between' alignItems='end'>
            <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Anagrafica {props.type} </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchTwoToneIcon></SearchTwoToneIcon>
                <TextField id="input-searchbar" label="Cerca..." variant="standard" />
            </Box>
        </Box>
        <Card>
            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mx:2,my:1 }}>
                <Typography  textAlign='left' variant="h6" fontWeight='bold'>{props.type}</Typography>
                <IconButton aria-label='Add' onClick={()=>{console.log("Button Test")}}>
                    <AddCircleTwoToneIcon fontSize='large' ></AddCircleTwoToneIcon>
                </IconButton>
            </Box>
            <TableContainer>
                <Table sx={{ minWidth: 400}}>
                    <TableHead>
                        <TableRow >
                            <TableCell align='left'> Nome </TableCell>
                            <TableCell align="center"> ID </TableCell>
                            <TableCell align="right"> Azioni </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((row) => (
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
        </Card>
        

    </Box>
};

{/* QUESTO E UN ESEMPIO DI MATERIAL TABLE CON BARRA DI RICERCA */}
{/*
import React from "react";
import MaterialTable from "material-table";
import { TextField } from '@material-ui/core';
import { Autocomplete } from "@material-ui/lab";

class OrdenCompra extends React.Component {
  state = {
    options: ["option 1", "option 2"],
    data: []
  };

  render() {
    return (
      <MaterialTable
        title="Custom Edit Component Preview"
        columns={[
          {
            title: "Name",
            field: "name",
            editComponent: props => (
              <input
                type="text"
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
              />
              <Autocomplete
              inputValue={props.value}
              onInputChange={(e, nv) => { props.onChange(nv) }}
      id="combo-box-demo"
      options={this.options}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
            )
          },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
          }
        ]}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            })
        }}
      />
    );
  }
}

export default OrdenCompra;
 */}