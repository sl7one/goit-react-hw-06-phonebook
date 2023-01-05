import styled from 'styled-components';

const s = {
  Section: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Label: styled.label`
    font-size: 20px;
    margin-bottom: 10px;
  `,

  Input: styled.input`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    font-size: 18px;
  `,

  Title: styled.p`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
  `,

  Button: styled.button`
    width: 150px;
    height: 30px;
    background-color: teal;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 20px;

    &:hover {
      background-color: orange;
    }
  `,
};

export default s;
