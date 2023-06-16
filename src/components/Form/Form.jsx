import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function Form() {
    const dispatch = useDispatch();
  
    const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.target;
      dispatch(addContact(form.elements.name.value,form.elements.number.value));
      form.reset();
    }
  
    return (
        <form onSubmit={handleSubmit}>
        <TextField
          inputProps={{
            pattern: "^[a-zA-Z-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$",
            title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}}
            id="outlined-basic"
            label="Name" 
            type="text"
            name="name"
            required
          />
        {' '}
        <TextField
          inputProps={{
            pattern: "?{1,4}?[-.]??{1,3}??[-.]?{1,4}[-.]?{1,4}[-.]?{1,9}",
            title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}}
            id="outlined-basic"
            label="Telephone number" 
            type="text"
            name="number"
            required
        />
          {' '}
        <Button
          variant="contained"
          type="submit"
          >Add contact</Button>
        </form>
    );
  }
