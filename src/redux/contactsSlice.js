import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addContact, deleteContact, fetchContacts } from "./operations";
 
const contactsInitialState = initialState.contacts;

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]:(state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]:(state, action) => {
      state.isLoading = false;
      state.error = null;
      // state.items.push(action.payload); 
      if (state.items.find(contact => contact.name.toLowerCase().trim() === action.payload.name.toLowerCase().trim())) {
            return alert(`The contact "${action.payload.name}" is already in the contacts!`);
        } else  if (state.items.find(contact => contact.number.toLowerCase().trim() === action.payload.number.toLowerCase().trim())) {
            return alert(`The number "${action.payload.number}" is already in the contacts!`);
        }   else{
            return state.items.push(action.payload);  
        }
    },
  
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]:(state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

