import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    image: any;
}

const informacao: Item[] = [
    {id: "1", nome: "Tomahawk", preco: "R$ 89,90", ingredientes: "Corte Tomahawk, porão de batar gratinadas, molho chimichurri", image: require('./assets/images/carne1.jpg')},
    {id: "2", nome: "Tutano com gremolata", preco: "R$ 75,00", ingredientes: "Macio tutano de boi servido com gremolata fresca e pães. Uma ótima opção de entrada.", image: require('./assets/images/prato2.jpg') },
    {id: "3", nome: "Picanha", preco: "R$ 145,00", ingredientes: "O corte mais desejado nos churrascos brasileiros, suas fibras macias e sua capa de gordura são responsáveis por garantir a consistência macia e o sabor inconfundível da picanha.",image: require('./assets/images/prato3.jpg') },
    {id: "4", nome: "Porterhouse", preco: "R$ 249,00", ingredientes: "Também conhecido como T-bone,é o rei do steaks. De um lado, uma porção generosa de filé mignon; do outro, a combinação de sabores do contra filé e da alcatra.",image: require('./assets/images/prato4.jpg') },
    {id: "5", nome: "Ancho", preco: "R$ 105,00", ingredientes: "Corte tradicional Argentino, bife alto e de carne bem marmorizada.",image: require('./assets/images/prato5.jpg') },
    {id: "6", nome: "Bombom de alcatra", preco: "R$ 93,00", ingredientes: "Coração da Alcatra, peça nobre e extremamente macia.",image: require('./assets/images/prato6.jpg') },
    {id: "7", nome: "Filet mignon", preco: "R$ 99,00", ingredientes: "O corte mais macio da carne bovina. O clássico sem erros." ,image: require('./assets/images/prato7.jpg') },
    {id: "8", nome: "Filé de frango marinado", preco: "R$ 61,00", ingredientes: "Clássico filé do peito do frango, aqui marinado com mostarda, molho inglês e ervas." ,image: require('./assets/images/prato8.jpg')},
    {id: "9", nome: "Fraldinha", preco: "R$ 139,00", ingredientes: "Corte muito macio do boi, entra a costela e o traseiro, com uma gordura bem distribuída, é etremamente versátil e fica incrível grelhado no fogo!" ,image: require('./assets/images/prato9.jpg')},
    {id: "10", nome: "Flat Iron", preco: "R$ 115,00", ingredientes: "Corte da paleta bovina, o flat iron é uma carne supreendentemente macia e saborosa!" ,image: require('./assets/images/prato10.jpg')},
    {id: "11", nome: "Picanha de Cordeiro", preco: "R$ 125,00", ingredientes: "O corte de maior sucesso entre os brasileiros, agora na versão cordeiro. Proveniente de animais criados nas pastagens da Patagônia Chilena. Carne macia, suculenta e saborosa." ,image: require('./assets/images/prato11.jpg')},
    {id: "12", nome: "Teste1", preco: "R$ 35,00", ingredientes: "testes,testm,teste,tess" ,image: require('./assets/images/carne1.jpg')},
    {id: "13", nome: "Teste1", preco: "R$ 35,00", ingredientes: "testes,testm,teste,tess" ,image: require('./assets/images/carne1.jpg')},
    {id: "14", nome: "Teste1", preco: "R$ 35,00", ingredientes: "testes,testm,teste,tess" ,image: require('./assets/images/carne1.jpg')},
    {id: "15", nome: "Teste1", preco: "R$ 35,00", ingredientes: "testes,testm,teste,tess" ,image: require('./assets/images/carne1.jpg')},
];
const epeciais: Item[] =[
    {id: "1", nome: "Tomahawk", preco: "R$ 89,90", ingredientes: "Corte Tomahawk, porão de batar gratinadas, molho chimichurri", image: require('./assets/images/carne1.jpg')},
    {id: "2", nome: "Tutano com gremolata", preco: "R$ 75,00", ingredientes: "Macio tutano de boi servido com gremolata fresca e pães. Uma ótima opção de entrada.", image: require('./assets/images/prato2.jpg') },
    {id: "3", nome: "Picanha", preco: "R$ 145,00", ingredientes: "O corte mais desejado nos churrascos brasileiros, suas fibras macias e sua capa de gordura são responsáveis por garantir a consistência macia e o sabor inconfundível da picanha.",image: require('./assets/images/prato3.jpg') },
]


const renderItem = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.ingredientes}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
    </View>
)

function FlatListCardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            
            <StatusBar backgroundColor={"black"} barStyle={"light-content"}/>
            <View style={styles.header}>
                
                <Image 
                source={require('./assets/images/logo.jpeg')}
                style={styles.logo}/>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={informacao}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/home.png')}
                    style={styles.footerIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/orders.png')}
                    style={styles.footerIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/profile.png')}
                    style={styles.footerIcon}/>
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
        opacity:1,
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
        borderWidth:1.5,
        borderColor: 'white',
        alignItems: 'flex-end'
    }
})
export default FlatListCardapio;