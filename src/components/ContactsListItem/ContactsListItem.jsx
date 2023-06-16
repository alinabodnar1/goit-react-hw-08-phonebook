import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export default function ContactsListItem({contact}){
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <List key={contact.id}>
            <span>{contact.name}</span> {' '}
            <span>{contact.number}</span> {' '}
            
            <Button 
                variant="outlined"
                type="button"
                onClick={handleDelete}
            >    
                DELETE
            </Button>
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