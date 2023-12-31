import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';
import css from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;

    if (formName !== '' || formNumber !== '') {
      dispatch(
        addContact({
          name: formName,
          number: formNumber,
        })
      );
      form.reset();
      return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.container}>
        <TextField
          inputProps={{
            pattern: "^[a-zA-Z-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
          id="outlined-basic"
          label="Name"
          type="text"
          name="name"
          color="success"
          required
        />

        <TextField
          inputProps={{
            pattern: '?{1,4}?[-.]??{1,3}??[-.]?{1,4}[-.]?{1,4}[-.]?{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
          id="outlined-basic"
          label="Telephone number"
          type="number"
          name="number"
          color="success"
          required
        />
      </div>
      <div className={css['button-container']}>
        <Button variant="contained" type="submit" color="success">
          Add contact
        </Button>
      </div>
    </form>
  );
}
