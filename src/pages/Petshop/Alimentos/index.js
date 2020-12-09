import React from "react";
import ItensList from "../ItensList";
import { Container, List } from "./styles";
import { itens } from "../../../data/data";

function Alimentos({ navigation }) {
  return (
    < Container >
      <List
        data={itens}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ItensList item={item} />}
      />
    </Container >
  );
}

Alimentos.navigationOptions = {
  title: "Alimentos",
};

export default Alimentos;
