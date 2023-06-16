import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { changeFilter }  from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const textFilter = useSelector(state => state.filter);

  function handleFilterChange(evt) {
    dispatch(changeFilter(evt.target.value)); 
  } 

  return (
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        onChange={handleFilterChange}
        value={textFilter}
      />
  );
}
