import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import css from './ContactsListItem.module.css';

function reducer(state, { type, payload }) {
  switch (type) {
    case 'changeMode':
      return { ...state, isEdit: !state.isEdit };
    case 'name':
      return { ...state, name: payload };
    case 'number':
      return { ...state, number: payload };
    default:
      return state;
  }
}

export default function ContactsListItem({contact}){
    const dispatchToRedux = useDispatch();
    const [state, dispatch] = useReducer(reducer, {
        isEdit: false,
        name: contact.name,
        number: contact.number,
  });
  const handleEdit = () => {
    if (state.isEdit) {
      const updatedContact = {
        ...contact,
        name: state.name,
        number: state.number,
      };
      dispatchToRedux(editContact(updatedContact));
    }
    dispatch({
      type: 'changeMode',
    });
  };
  const onChange = e => {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
  };

    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <List key={contact.id}>
            <div className={css.container}>
                <CheckIcon /> 
    
                { state.isEdit ? (
                    <TextField
                        margin={'dense'}
                        className={css.name}
                        id="standard-basic"
                        label="Change Name"
                        variant="standard"
                        value={state.name}
                        onChange={onChange}
                    />
                ) : (
                    <span>{contact.name}</span> 
                )}
                
                {state.isEdit ? (
                    <TextField
                        margin={'dense'}
                        className={css.number}
                        id="standard-basic"
                        label="Change Number"
                        variant="standard"
                        value={state.number}
                        onChange={onChange}
                    />
                ) : (
                     <span>{contact.number}</span>
                )}
                 <div className={css['button-container']}>
                    <button 
                        type="button"
                        className={css.button}
                        onClick={handleDelete} >    
                    Delete
                    </button>
                </div>   
                <div className={css['button-container']}>
                    <button
                        type="button"
                        className={css.button}
                        onClick={handleEdit}>
                    {state.isEdit ? 'Save' : 'Edit'}
                </button>
                </div>    
            </div>
        </List>
    )
    
}

ContactsListItem.propTypes = {
    contact: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,    
        }).isRequired,
}