import { Box, Center, Flex, NativeBaseProvider, Progress, Spacer } from "native-base";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import TextField from "../../components/TextField";
import DadosCliente from "./components/DadosCliente";
import DadosConta from "./components/DadosConta";
import DadosLocal from "./components/DadosLocal";




const TelaCadastro = ({route, navigation}) => {
    let obj = {
        email: "",
        senha: "",
        confirmarSenha: "",
        nome: "",
        sobrenome: "",
        cpf: "",
        cidade: "",
        estado: "",
        idade: ""
    }
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [objRespostas, setObjRespostas] = useState(obj);
    const [valorProgresso, setValorProgresso] = useState(0);
    const {estiloTela, Cadastro} = route.params;

    useEffect(() => {
        console.log(objRespostas)
    }, [objRespostas])

    function proximaEtapa(){
        setEtapaAtual(etapaAtual + 1);
        setValorProgresso(valorProgresso + 50);
    }
    function voltarEtapa(){
        setEtapaAtual(etapaAtual - 1);
        setValorProgresso(valorProgresso - 50);
    }
    function guardarRespostas(dados){
        setObjRespostas({...objRespostas, ...dados});
        if(etapaAtual != listaFormulario.length - 1){
            proximaEtapa();
        }
    }
    function soGuardar(dados){
        setObjRespostas({...objRespostas, ...dados});
    }

    const listaFormulario = [
    <DadosConta estilos={[estilos.caixaLogin, 
    estilos.titulo, 
    estilos.labels, 
    estilos.caixaBotao, 
    estilos.botao ,
    estilos.textoBotao]} 
    conta={Cadastro.conta}
    envio={guardarRespostas}
    json={objRespostas}
    
    />,
    <DadosCliente estilos={[estilos.caixaLogin, 
    estilos.titulo, 
    estilos.labels, 
    estilos.caixaBotao, 
    estilos.botao ,
    estilos.textoBotao]} 
    cliente={Cadastro.cliente}
    envio={guardarRespostas}
    voltar={voltarEtapa}
    json={objRespostas}
    

    />,
    <DadosLocal estilos={[estilos.caixaLogin, 
    estilos.titulo, 
    estilos.labels, 
    estilos.caixaBotao, 
    estilos.botao ,
    estilos.textoBotao]} 
    local={Cadastro.local}
    envio={guardarRespostas}
    volta={voltarEtapa}
    json={objRespostas}
    soGuardar={soGuardar}
    
    
    />
        ];
    return(
        <View style={[estiloTela, estilos.tela]}>
                <NativeBaseProvider>
                    <Flex style={estilos.configProgress} >   
                            <Box w="50%" >
                                <Progress size="md" colorScheme="emerald" value={valorProgresso}/>
                            </Box>  
                    </Flex>
                </NativeBaseProvider>
           
                <View style={estilos.configCaixaLogin}>
                    {listaFormulario[etapaAtual]}
                </View>
        </View>
    );



}

const estilos = StyleSheet.create({
    tela: {
        backgroundColor: '#A6C2AB'
    },
    progresso:{
        fontSize: 20,
        textAlign: 'center',
        color: '#414141',
        paddingTop: 30
    },
    configProgress: {
        width: '100%',
        height: '50%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    configCaixaLogin: {
        height: '80%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaLogin:{
        height: 450,
        width: 350,
        backgroundColor: '#E6E6E6',
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    titulo: {
        fontSize: 18,
        color: '#414141',
        textAlign: 'center'
    },
    labels:{
        fontSize: 14,
        color: '#414141',
        textAlign: 'left',
        paddingLeft: 15,
        marginBottom: 10,
        fontFamily: "RobotoRegular",
        lineHeight: 18
    },
    caixaBotao:{
        height: '23%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#2F942F',
        borderRadius: 24,
        height: 50,
        width: 140
    },
    textoBotao: {
        color: '#E6E6E6',
        fontSize: 14,
        fontFamily: 'RobotoRegular',
        lineHeight: 15,
        textAlign: 'center',
        paddingTop: 18
     }
});

export default TelaCadastro;

