import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addContact, deleteContact, fetchContacts } from "./operations";
 
const contactsInitialState = initialState.contacts;

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.items.find(contact => contact.name.toLowerCase().trim() === action.payload.name.toLowerCase().trim())) {
            alert(`The contact "${action.payload.name}" is already in the contacts!`);
        } else  if (state.items.find(contact => contact.number.toLowerCase().trim() === action.payload.number.toLowerCase().trim())) {
            alert(`The number "${action.payload.number}" is already in the contacts!`);
        } else {
           state.items.push(action.payload); 
        }
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(contact => contact.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
  },
});

export const contactsReducer = contactsSlice.reducer;

