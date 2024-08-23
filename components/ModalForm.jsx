'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Container, Typography } from '@mui/material';
import Swal from 'sweetalert2';

function ModalForm({ closeModal }) {  // Accept closeModal as a prop
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show the alert
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Service Booked Successfully!!",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        closeModal();  // Close the modal when the SweetAlert modal is closed
      });

    // Clear form
    setFormValues({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 0, mb:4 }}>
        <Typography variant="h4" gutterBottom className='text-black/70'>
          User Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                value={formValues.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                value={formValues.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                variant="outlined"
                fullWidth
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default ModalForm;
