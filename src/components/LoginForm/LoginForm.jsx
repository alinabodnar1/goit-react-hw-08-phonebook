import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
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
            Log In
          </Button>
        </div>
      </form>
      <div className={css.wrapper}>
        <p className={css.account}>
          Don't have an account?
          <NavLink className={css.link} to="/register">
            Sign up
          </NavLink>
        </p>
      </div>
    </>
  );
};
