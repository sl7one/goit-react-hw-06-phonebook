import styled from 'styled-components';
import ListItem from './ListItem';

const Ul = styled.ul`
  margin-top: 20px;
`;

const ContactList = ({ contactList, onClick }) => {
  return (
    <Ul>
      {contactList.map(el => {
        return (
          <ListItem
            key={el.id}
            name={el.name}
            number={el.number}
            onClick={onClick}
            id={el.id}
          />
        );
      })}
    </Ul>
  );
};

export default ContactList;
