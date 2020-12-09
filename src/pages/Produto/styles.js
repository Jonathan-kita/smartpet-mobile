import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  background: #fff;
  align-items: center;
  padding-bottom: 30px;
  border-bottom-width: 2px;
  border-color: #f76abc;
  width: 100%;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PhotoContainer = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
`;

export const BoxForName = styled.View`
  width: 100%;
  height: 50px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
`;

export const Name = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 16px;
  margin-left: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 13px;
  margin-top: 10px;
  border-color: #2dc7ff;
  border-bottom-width: 1px;
  padding-bottom: 3px;
  margin-left: 2px;
`;
export const Descripition = styled.Text`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #666;
`;

export const BoxForDescripition = styled.View`
  padding: 10px;
  background: #fff;
  margin-top: 10px;
`;

export const Valor = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Button = styled(BaseButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #2dc7ff;
`;
