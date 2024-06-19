import React from 'react';
import FileUpload from './components/FileUpload';
import DicomViewer from './components/DicomViewer';
import './App.css';
import { Container, Box, Typography, Paper } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Rai's DICOM Reader
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '600px' }}>
          <FileUpload />
        </Paper>
        <Box mt={4} width="100%" display="flex" justifyContent="center">
          <DicomViewer />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
