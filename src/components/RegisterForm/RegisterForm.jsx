import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Username"
        type="text"
        name="name"
        color="success"
        margin="normal"
        fullWidth="true"
        required
      />
      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        name="email"
        color="success"
        margin="normal"
        fullWidth="true"
        required
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        name="password"
        color="success"
        margin="normal"
        fullWidth="true"
        required
      />
      <div className={css.button}>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </div>
    </form>
  );
};
