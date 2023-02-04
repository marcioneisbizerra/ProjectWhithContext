import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { apagaProdutos, pegarProdutos, salvarProduto } from "../servicos/requisicoes/produtos";

export const ProdutoContext = createContext({})

export function ProdutoProvider( {children}){

    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])
    const [precoTotal, setPrecoTotal] = useState(0)

    useEffect(async () => {
        const resultado = await pegarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length);
        let precoNovo = 0
        for (let index = 0; index < resultado.length; index++) {
            precoNovo += resultado[index].preco
        }
        setPrecoTotal(precoNovo)
    }, [])

    async function viuProduto(produto){
        setQuantidade(quantidade+1);

        const resultado = await salvarProduto(produto);

        let novoCarrinho = carrinho
        novoCarrinho.push(resultado);
        setCarrinho(novoCarrinho);

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produto)
        setUltimosVistos([...novoUltimosVistos])

        let precoAtual = precoTotal + produto.preco
        setPrecoTotal(precoAtual)

    }

    async function finalizaCompras(){
        try{
            carrinho.forEach(async produto => {
                await apagaProdutos(produto);
            })
            setCarrinho([]);
            setPrecoTotal(0);
            setQuantidade(0);
            return 'Compra finalizada com sucesso'
        }
        catch(erro){
            return 'Erro ao finalizar a compra, tente mais tarde!!'
        }
    }


    return (
        <ProdutoContext.Provider value={{
         quantidade,
         carrinho,
         ultimosVistos,
         viuProduto,
         precoTotal,
         finalizaCompras
        }}>
            {children}
        </ProdutoContext.Provider>
    )
}