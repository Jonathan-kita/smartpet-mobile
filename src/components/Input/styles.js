import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 45px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 5px;
  color: #000;
`;
