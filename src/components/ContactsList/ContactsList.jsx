import React from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';

export default function ContactsList() {
    const contacts = useSelector(visibleContacts);
    console.log("contacts in ContactsList:", contacts);
   
    return (<ul>
            { contacts.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    )
}

