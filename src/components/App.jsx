import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div style={{marginLeft: "20px"}}>
        <h1>Phonebook</h1>
        <Form />
      
        {isLoading && !error && <b> Wait, request in progress...</b>}
        
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }


