import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import CheckIcon from '@mui/icons-material/Check';
import css from './ContactsListItem.module.css';

export default function ContactsListItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <List key={contact.id}>
      <div className={css.container}>
        <CheckIcon color="success"/>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
        <div className={css['button-container']}>
          <button
            variant="outlined"
            type="button"
            className={css.button}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </List>
  );
}

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
