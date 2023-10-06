import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Button } from '@mui/material';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  
  return (
    <div className={css.wrapper}>
      <p className={css.welcome}>
        Welcome, <span className={css.name}>{user.name}</span>
        <span role="img" aria-label="Greeting icon">
          🤚
        </span>
      </p>
      <div className={css.logout}>
        <Button
          type="button"
          onClick={handleLogOut}
          variant="contained"
          color="success"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};
