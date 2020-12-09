import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carrossel from './Carrossel';
import Produtos from '../../components/Produtos';
import carrosselImage from '../../assets/imgCarrossel.jpg';
import Avaliado from './Avaliado';
import { Container, List } from './styles';
import data from '../../data/data1';
function Home({ navigation }) {
  const profile = useSelector((state) => state.user.profile);
  // Pega os Valores das Lojas Avalidas
  const [lista, setlista] = useState('');
  useEffect(() => {
    data[0]().then((results) => {
      return setlista(results);
    });
  }, []);
  console.log(lista);
  return (
    <Container>
      <Produtos onPress={() => navigation.navigate('Alimentos')} />
      <Carrossel image={carrosselImage} />
      <List
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => (
          <Avaliado
            item={item}
            onPress={() => navigation.navigate('PetShopAcessorios', { id: item.item.id })}
          />
        )}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={30} color={tintColor} />
  ),
};

export default Home;
