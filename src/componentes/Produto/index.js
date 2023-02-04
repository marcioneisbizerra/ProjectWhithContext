import { useContext } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ProdutoContext } from '../../contexts/ProdutoContext';
import { estilos } from './estilos'

export function Produto({ item, adicionar }) {

  const {
    viuProduto
  }  = useContext(ProdutoContext)

  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem}/>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      { adicionar &&
      <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => viuProduto(item)}>
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>}
    </View>
  );
}
