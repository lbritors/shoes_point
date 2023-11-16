//criar uma barra lateral com as opções de cadastro de produtos, clientes, fornecedores, funcionários, vendas, compras, relatórios, configurações, sair
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
