import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setFileUrl } from '../store/dicomSlice';
import axios from 'axios';
import { Button, TextField, Box } from '@mui/material';

const schema = yup.object().shape({
  file: yup.mixed().required('A file is required'),
});

const FileUpload: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);

    try {
      const response = await axios.post('http://localhost:3000/dicom/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Backend response:', response.data); // Log backend response
      const fileUrl = `http://localhost:3000/dicom/${response.data.filename}`;
      dispatch(setFileUrl(fileUrl));
      console.log('File URL:', fileUrl); // Log file URL
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" alignItems="center">
        <TextField
          type="file"
          {...register('file')}
          error={!!errors.file}
          helperText={errors.file ? errors.file.message : ''}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
          Upload
        </Button>
      </Box>
    </form>
  );
};

export default FileUpload;
