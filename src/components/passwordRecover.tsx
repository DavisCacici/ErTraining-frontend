import {
  Card,
  FormControl,
  Grid,
  Box,
  Typography,
  CardContent,
  TextField,
  Button,
} from '@mui/material';
import { useState } from 'react';
import React from 'react';

export const PasswordRecover: React.FunctionComponent = () => {
  return (
    <Box>
      <Typography
        textAlign="left"
        variant="h5"
        sx={{ fontWeight: 'bold', mb: 5 }}
      >
        Resetta Password
      </Typography>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        style={{ minHeight: '30vh' }}
      >
        <Grid item>
          <Card sx={{ py: '20px' }}>
            <CardContent>
              <TextField
                required
                fullWidth
                id="mail-required"
                label="Mail"
                type="email"
              />
              <Button
                sx={{ mt: 5 }}
                fullWidth
                variant="contained"
                onClick={() => {
                  console.log('Button Test');
                }}
              >
                Richiedi Password
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
