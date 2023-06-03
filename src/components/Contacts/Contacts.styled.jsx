import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 50px 30px;
`;

export const ContactItem = styled.li`
  width: 650px;
  margin: 10px;
  padding: 5px 15px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactText = styled.p`
  font-size: 30px;
  padding-right: 40px;
`;

export const DeleteBtn = styled.button`
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 25px;
  &:hover {
    background-color: #c23f4d;
  }
`;

export const Message = styled.p`
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 50px;
`;
