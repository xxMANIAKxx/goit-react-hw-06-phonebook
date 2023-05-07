import { useState } from 'react';
import style from './ContactForm.module.css';
import { addContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';



const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getFilteredContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`User with name ${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

    return (
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={style.inputName}
            type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={event => setName(event.target.value)}
          />
        </label>
        <label>
          Number
          <input
            className={style.inputNumber}
            type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={event => setNumber(event.target.value)}
          />
        </label>

        <button type="submit" className={style.buttonEditor}>
          Add contact
        </button>
      </form>
    );
}
  
export default ContactForm;