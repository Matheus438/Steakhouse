import React from "react";
import FlatListCardapio from "./src/FlatListCardapio";
import Carrinho from "./src/Carrinho";
import CadastroProduto from "./src/screens/Cadastro";
import CadastroSteakhouse from "./src/screens/CadastroSteakhouse";
import CadastroCliente from "./src/screens/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='FlatListCardapio' component={FlatListCardapio} 
        options={{ headerShown: false}}/>
        <Stack.Screen  name='Carrinho' component={Carrinho} 
        options={{ headerShown: false}}/>
        <Stack.Screen  name='CadastroCliente' component={CadastroCliente} 
        options={{ headerShown: false}}/>
        <Stack.Screen  name='CadastroSteakhouse Produto' component={CadastroSteakhouse} 
        options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;