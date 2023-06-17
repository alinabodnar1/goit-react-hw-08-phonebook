import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import css from "App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container} >
      <div className={css.form}>
        <Form />
        {isLoading && !error && <p className={css.loading}> Wait, request is in progress...</p>}
      </div>
  
      <div className={css.list}>
        <h1 className={css.title}>Phonebook</h1>
          <ContactsList /> 
      </div >

      <div className={css.filter}>
          <Filter />
      </div>
      </div>
    );
  }


