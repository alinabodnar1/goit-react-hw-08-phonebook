import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dna } from 'react-loader-spinner';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import ContactsList from '../components/ContactsList/ContactsList';
import Form from '../components/Form/Form';
import Filter from 'components/Filter/Filter';
import css from './pages.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.wrapper}>
        <Form />
        <Filter />
      </div>
      <div style={{ marginTop: '20px', marginBottom: '10px' }}>
        {isLoading && (
          <Dna
            visible={true}
            height="60"
            width="60"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
      </div>
      <ContactsList />
    </div>
  );
}
