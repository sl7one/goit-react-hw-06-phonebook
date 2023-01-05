import s from './style.styled';
import styled from 'styled-components';

const BtnDelete = styled(s.Button)`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: red;
  margin-top: 0;
`;

const Button = ({ type = 'button', name, onClick, id }) => {
  return type === 'button' ? (
    <BtnDelete type={type} onClick={onClick} data-id={id}>
      {name}
    </BtnDelete>
  ) : (
    <s.Button type={type} onClick={onClick} data-id={id}>
      {name}
    </s.Button>
  );
};

export default Button;

// Button.propTypes = {
//     type: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     onClick: PropTypes.func,
//     id: PropTypes.string,
// };
