import React from "react";
import ItensList from "../ItensList";
import { Container, List } from "./styles";
import { remedios } from "../../../data/data";

function Saude() {
  return (
    <Container>
      <List
        data={remedios}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ItensList item={item} />}
      />
    </Container>
  );
}

Saude.navigationOptions = {
  title: "Saúde",
};

export default Saude;
