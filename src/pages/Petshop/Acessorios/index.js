import React, { useEffect, useState } from 'react';
import ItensList from '../ItensList';
import { Container, List } from './styles';
import data from '../../../data/data1';

function Acessorios({ navigation }) {
  const [acessorios, setAcessorios] = useState([]);
  useEffect(() => {
    let id = navigation.state.params.id;
    data[5](id, 'Acessórios').then(res => {
      setAcessorios(res);
    })
  }, [])
  return (
    <Container>
      <List
        data={acessorios}
        keyExtractor={(item) => String(item.idproduto)}
        renderItem={(item) => (
          <ItensList
            onPress={() => navigation.navigate('Produto', { id: item.item.idproduto })}
            item={item}
          />
        )}
      />
    </Container>
  );
}

Acessorios.navigationOptions = {
  title: 'Acessórios',
};

export default Acessorios;
