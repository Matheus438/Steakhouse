import React, { useState } from "react";
import { Button, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";
import { ImageBackground } from "react-native";


const CadastroCliente: React.FC = () => {
    
    const [nome, setNome] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastrarCliente = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('endereco', endereco);
            formData.append('telefone', telefone);
            formData.append('email', email);
            formData.append('cpf', cpf);
            formData.append('password', password);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            console.log(formData)
            const response = await axios.post('http://10.137.11.224:8000/api/clientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir a camera');
            } else {
                let imageUri = response.url || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }

        });

    }

    const SelecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('errp ao abrir a galeria');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <ImageBackground source={require('../assets/images/fundo.jpg')} resizeMode="cover" style={styles.image}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.header}>
            <Image
                    source={require('../assets/images/logo.jpeg')}
                    style={styles.logo}/>
            </View>
            <View style={styles.form}>
            <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View>
                
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    value={endereco}
                    onChangeText={setEndereco}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={setCpf}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                />
                
                <TouchableOpacity style={styles.imageButton} onPress={SelecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={CadastrarCliente}>
                    <Text style={styles.imageButtonText}>Cadastrar Cliente</Text>
                </TouchableOpacity>

            </View>
            
            </ImageBackground>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header: {
        
        paddingVertical: 10,
        alignItems: 'center',
    },
    form: {
        
        padding: 10,
        backgroundColor: '#f3f3f3',
        marginBottom: 10,
        borderRadius: 35,
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
    input: {
        color: 'black',
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        
    },
    logo: {
        borderRadius:10,
        marginTop: 50 ,
        marginBottom: 50,
        width: 129,
        height: 90
    },
    imageButton: {
        backgroundColor: '#CD5942',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 1000,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 2,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    textFormulario: {
        color: 'black'
    }

});
export default CadastroCliente