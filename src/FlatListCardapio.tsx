import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Produtos } from "./interface/ProdutoInterface";

const renderItem = ({ item }: { item: Produtos }) => (
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
    </View>
)



function FlatListCardapio(): React.JSX.Element {

    const [produto, setProduto] = useState<Produto[]>([]);
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<Produtos>('http://10.137.11.224:8000/api/produtos/index');
                setProduto(response.data);
                console.log(response.data);
                
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
            <View style={styles.header}>

                <Image
                    source={require('./assets/images/logo.jpeg')}
                    style={styles.logo} />
            </View>
            <ScrollView>

                <Text style={styles.textEspeciais}>Cardapio</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={produto}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/home.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/orders.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/profile.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/menu.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/sacola.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    item: {
        opacity: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white'

    },
    header: {
        opacity: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    textItem: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textItem2: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logo: {
        width: 129,
        height: 90
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'white',
        alignItems: 'flex-end'
    },
    textEspeciais: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 19,
        marginBottom: 19
    },
    image2: {
        width: 150,
        height: 350,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    image3: {
        width: 260,
        height: 210,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'white',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    textTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    sacola: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'white',
        marginLeft: 'auto'
    },
    bottom: {
        marginTop: 20,
        borderRadius: 5,

        width: 160,
        height: 40,
        backgroundColor: '#CD5942',
    },
    textoBotton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 6,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
})
export default FlatListCardapio;