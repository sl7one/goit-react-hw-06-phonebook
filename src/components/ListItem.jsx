import s from './style.styled';
import Button from './Button';
import styled from 'styled-components';

const Li = styled.li`
  list-style: none;
`;

const ListItem = ({ id, name, number, onClick }) => {
  return (
    <Li>
      <Button name="X" onClick={onClick} id={id} />
      <s.Label>
        {name}: {number}
      </s.Label>
    </Li>
  );
};

export default ListItem;
