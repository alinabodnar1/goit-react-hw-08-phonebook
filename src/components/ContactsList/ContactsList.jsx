import React from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';


export default function ContactsList() {
    const contacts = useSelector(state => state.contacts);
    const currentFilter = useSelector(state => state.filter);
    const visibleContacts = () => {
         return contacts.filter(contact => contact.name.toLowerCase().trim().includes(currentFilter));
    }
    return (<ul>
            { visibleContacts().map(contact => (
                <ContactsListItem
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    )
}

