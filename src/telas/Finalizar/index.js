import { Text, View, FlatList, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { estilos } from './estilos';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/temaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutoContext } from '../../contexts/ProdutoContext';


export default function Finalizar({navigation}) {

  const {temaEscolhido} = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)

  const {usuario} = useContext(AutenticacaoContext)

  const {
    quantidade,
    precoTotal,
    finalizaCompras
  } = useContext(ProdutoContext)

  async function zeraCarrinho(){

    const resultado = await finalizaCompras();
    Alert.alert(resultado)
    navigation.navigate('Principal')

  }

  return (

    <View style={estilo.container}>
      <View style={estilo.containerEntrega}>
        <Text style={estilo.titulo}>Informações da Entrega:</Text>
        <Text style={estilo.subTitulo}>Nome: {usuario.nome}</Text>
        <Text style={estilo.subTitulo}>Endereço: {usuario.endereco}</Text>
        <Text style={estilo.subTitulo}>E-mail: {usuario.email}</Text>
        <Text style={estilo.subTitulo}>Telefone: {usuario.telefone}</Text>
      </View>
      <View style={estilo.containerDados}>
        <Text style={estilo.subTitulo}>Quantidade: {quantidade}</Text>
        <Text style={estilo.subTitulo}>Preço Total: R$ {precoTotal}</Text>
      </View>
      <TouchableOpacity style={estilo.botao}
        onPress={() => {
          zeraCarrinho()}}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

