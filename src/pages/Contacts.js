import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsList from '../components/ContactsList/ContactsList';
import Form from '../components/Form/Form';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import Filter from 'components/Filter/Filter';
import css from './pages.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <div>
        <Form />
        <div>{isLoading && 'Request in progress...'}</div>
        <h2 className={css.titleContacts}>Your contacts:</h2>
        <ContactsList />
      </div>
      <Filter />
    </div>
  );
}
