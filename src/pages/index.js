import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4} color="primary">
        <Typography color="primary" variant="h4" gutterBottom>
          Aeon
        </Typography>
        <Typography color="secondary">Hello Aeon</Typography>
        <Paper>
          <Typography color="secondary">Here's Paper</Typography>
        </Paper>
        
      </Box>
    </Container>
  );
}