import Section from './Section';
import Search from './Search';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { addPhone, filterCont, removePhone } from 'redux/phone/phoneSlice';

const Wrapper = styled.div`
  padding: 30px;
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
  /* width: 300px; */
  background-color: tomato;
  border-radius: 20px;
  align-items: center;
`;

const App = () => {
  const { init: contacts } = useSelector(state => state.contacts);

  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const onSubmit = (name, number) => {
    if (contacts.some(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    dispatch(
      addPhone({
        id: nanoid(),
        name,
        number,
      })
    );
  };

  const onClickDelete = event => {
    const { id } = event.target.dataset;
    const newData = contacts.filter(el => {
      return el.id !== id;
    });

    dispatch(removePhone(newData));
  };

  const onChange = event => {
    const { value } = event.target;
    dispatch(filterCont(value));
  };

  const filtredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Wrapper>
      <Section title="Phonebook">
        <ContactForm onSubmitApp={onSubmit} />
      </Section>

      <Section title="Contacts">
        <Search label="Find contacts by name" onChange={onChange} />

        <ContactList contactList={filtredContacts()} onClick={onClickDelete} />
      </Section>
    </Wrapper>
  );
};

export default App;
