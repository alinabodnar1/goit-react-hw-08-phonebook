import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './Form.module.css';

export default function Form() {
    const dispatch = useDispatch();
  
    const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.target;
      dispatch(addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      }));
      form.reset();
    }
  
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container}>
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
       
          <TextField
            inputProps={{
            pattern: "?{1,4}?[-.]??{1,3}??[-.]?{1,4}[-.]?{1,4}[-.]?{1,9}",
            title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}}
            id="outlined-basic"
            label="Telephone number" 
            type="number"
            name="number"
            required
          />
        </div>
        <div className={css['button-container']}>
          <button
            variant="contained"
            type="submit"
            className={css.button}
          >Add contact</button>
        </div>
        </form>
    );
  }
