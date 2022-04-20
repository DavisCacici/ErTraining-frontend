import {
  Card,
  CardActions,
  Button,
  FormControl,
  Grid,
  TextField,
  Box,
  Typography,
  CardContent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from './profileModal/profileModal';

export const Profile: React.FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const confirmHandle = () => {
    setShowModal(false);
  };
  const cancelHandle = () => {
    setShowModal(false);
  };
  {
    /*Qui andranno richiesti ed importati l'email e il nome utente tramite chiamata Api
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');*/
  }
  return (
    <Box>
      <Typography textAlign="left" variant="h5" sx={{ fontWeight: 'bold' }}>
        Gestione profilo
      </Typography>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        style={{ minHeight: '40vh' }}
      >
        <Grid item>
          <Card sx={{ pb: '20px' }}>
            <CardContent sx={{ pb: '10px' }}>
              <Typography textAlign="left" variant="h6">
                Dati Utente
              </Typography>
              <FormControl fullWidth margin="dense">
                <TextField
                  id="username"
                  label="Nome"
                  type="email"
                  margin="dense"
                  onChange={() => {
                    console.log('Hello !');
                  }}
                ></TextField>
                <TextField
                  id="mail"
                  label="Mail"
                  type="email"
                  margin="dense"
                  onChange={() => {
                    console.log('Hello !');
                  }}
                ></TextField>
              </FormControl>
              <CardActions
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    console.log('Hello from Button');
                  }}
                >
                  Modifica e Salva
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Cambia Password
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ width: 400 }}>
        <Modal show={showModal} setShow={setShowModal} hideCloseButton={true}>
          <ModalHeader>Inserisci Email</ModalHeader>
          <ModalBody>
            <FormControl margin="dense">
              <TextField
                required
                id="mail-required"
                label="Email"
                type="email"
                onChange={() => {}}
                sx={{ mb: 2 }}
              />
              <br />
              <TextField
                required
                id="confirm-email-required"
                label="Confirm Email"
                type="email"
                onChange={() => {}}
                sx={{ mt: 2, mb: 2 }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={cancelHandle}>Cancel</Button>
            <Button color={'primary'} onClick={confirmHandle}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Box>
  );
};
