import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name,number}, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {name,number});
      toast.success(`Contact ${name} with number ${number} is added to the phonebook!`);
      return response.data;
    } catch (e) {
      toast.error('Oops! Something is wrong, please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.info(`This contact is delited from your phonebook!`);
      return data.id;
    } catch (e) {
      toast.error('Oops! Something is wrong, please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
