import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { changeFilter }  from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const textFilter = useSelector(selectFilter);

  function handleFilterChange(evt) {
    dispatch(changeFilter(evt.target.value)); 
  } 
  
  return (
      <TextField
        id="standard-basic"
        label="Filter by name or number"
        variant="standard"
        onChange={handleFilterChange}
        value={textFilter}
      />
  );
}
