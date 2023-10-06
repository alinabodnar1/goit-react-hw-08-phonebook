import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import css from './RegisterForm.module.css';

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
        placeholder="Enter your name"
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
        placeholder="your_email@gmail.com"
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
        placeholder="********"
        required
      />
      <div className={css.button}>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </div>
      <p className={css.registered}>
        Already registered?
        <NavLink className={css.link} to="/login">
          Log In
        </NavLink>
      </p>
    </form>
  );
};
