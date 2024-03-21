import React from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
    image: any;
}

const sobremesa: Item[] = [

    {id: "15", nome: "Brownie", preco: "R$ 54,00", descricao: "Pedaço generoso de borwnie, servido com sorvete de creme e uma calda quente de chocolate." ,image: require('./assets/images/sobremesa1.jpg')},
    {id: "16", nome: "Base banoffee", preco: "R$ 45,00", descricao: "Uma banoffee a nossa maneira: banana, doce de leite e crumble de canela servido quentes, cobertos por sorvete de crème." ,image: require('./assets/images/sobremesa2.jpg')},
    {id: "17", nome: "Maçãs carameladas com sorvete", preco: "R$ 53,00", descricao: "Maçãs assadas servidas com crumble, canela e uma deliciosa calda de caramelo. Sem esquecer do sorvete cremoso de crème." ,image: require('./assets/images/sobremesa3.jpg')},
    {id: "18", nome: "Cheesecake com frutas vermelhas", preco: "R$ 45,00", descricao: "Fatia de cheesecake coberto por calda de frutas." ,image: require('./assets/images/sobremesa4.jpg')},
];

const especiais: Item[] =[
    {id: "1", nome: "Tomahawk", preco: "R$ 89,90", descricao: "Corte Tomahawk, porção de batatas gratinadas, molho chimichurri", image: require('./assets/images/carne1.jpg')},
    {id: "2", nome: "Tutano com gremolata", preco: "R$ 75,00", descricao: "Macio tutano de boi servido com gremolata fresca e pães. Uma ótima opção de entrada.", image: require('./assets/images/prato2.jpg') },
    {id: "3", nome: "Picanha", preco: "R$ 145,00", descricao: "O corte mais desejado nos churrascos brasileiros, suas fibras macias e sua capa de gordura são responsáveis por garantir a consistência macia e o sabor inconfundível da picanha.",image: require('./assets/images/prato3.jpg') },
];
const grelhados: Item[] = [
    {id: "5", nome: "Ancho", preco: "R$ 105,00", descricao: "Corte tradicional Argentino, bife alto e de carne bem marmorizada.",image: require('./assets/images/prato5.jpg') },
    {id: "6", nome: "Bombom de alcatra", preco: "R$ 93,00", descricao: "Coração da Alcatra, peça nobre e extremamente macia.",image: require('./assets/images/prato6.jpg') },
    {id: "7", nome: "Filet mignon", preco: "R$ 99,00", descricao: "O corte mais macio da carne bovina. O clássico sem erros." ,image: require('./assets/images/prato7.jpg') },
    {id: "8", nome: "Filé de frango marinado", preco: "R$ 61,00", descricao: "Clássico filé do peito do frango, aqui marinado com mostarda, molho inglês e ervas." ,image: require('./assets/images/prato8.jpg')},
    {id: "9", nome: "Fraldinha", preco: "R$ 139,00", descricao: "Corte muito macio do boi, entra a costela e o traseiro, com uma gordura bem distribuída, é etremamente versátil e fica incrível grelhado no fogo!" ,image: require('./assets/images/prato9.jpg')},
    {id: "10", nome: "Flat Iron", preco: "R$ 115,00", descricao: "Corte da paleta bovina, o flat iron é uma carne supreendentemente macia e saborosa!" ,image: require('./assets/images/prato10.jpg')},
    {id: "11", nome: "Picanha de Cordeiro", preco: "R$ 125,00", descricao: "O corte de maior sucesso entre os brasileiros, agora na versão cordeiro. Proveniente de animais criados nas pastagens da Patagônia Chilena. Carne macia, suculenta e saborosa." ,image: require('./assets/images/prato11.jpg')},
];
const cozimento: Item[] = [
    {id: "12", nome: "Costela bovina", preco: "R$ 102,00", descricao: "Tradicional costela bovina ao estilo gaúcho, assada por 10 horas até quase desmanchar." ,image: require('./assets/images/prato12.jpg')},
];
const frutoMar: Item[] = [
    {id: "13", nome: "Salmão", preco: "R$ 99,00", descricao: "Lombo de salmão grelhado." ,image: require('./assets/images/image13.jpg')},
    {id: "14", nome: "Filé de Tilápia", preco: "R$ 35,00", descricao: "Filé de peixe branco grelhado." ,image: require('./assets/images/image14.jpg')},
];
const vinhos: Item[] = [

    {id: "19", nome: "Veuve Clicquot Brut", preco: "R$ 870,00", descricao: "De coloração palha, com borbulhas finas e intensas e aromas finos de maçã, pera madura, flores brancas, brioche e tostado." ,image: require('./assets/images/bebida1Sembg.png')},
    {id: "20", nome: "Dom Pérignon Vintage", preco: "R$ 2.599,00", descricao: "Fresco, cristalino e penetrante, o primeiro nariz revela um mundo vegetal e aquático únicos com sugestões de pimenta branca e gardênia. A maturidade do vinho se apresenta através de toques de turfa." ,image: require('./assets/images/bebida2Sembg.png')},
    {id: "21", nome: "Delas Viognier", preco: "R$ 365,00", descricao: "A Viognier é, sem dúvidas, a grande variedade branca do Rhône, no sul da França. Este cuvée é produzido a partir de uvas cultivadas nas encostas perto da Pont du Gard. Solo Villafranchian argila-calcário." ,image: require('./assets/images/bebida3-removebg-preview.png')},
    {id: "22", nome: "Arboleda Carmenère", preco: "R$ 389,00", descricao: "Vinho de coloração intensamente violeta e profunda, este vinho revela uma penetrante mistura de aromas. O vinho se abre com notas doces de especiarias que lembram canela e baunilha, as quais se envolvem com características de pimenta negra e pimentão vermelho assado. " ,image: require('./assets/images/bebida4-removebg-preview.png')},
];


const renderItem1 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
    </View>
)

const renderItem2 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
    </View>
)
const renderItem3 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
    </View>
)
const renderItem4 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
    </View>
)
const renderItem5 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
    </View>
)
const renderItem6 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
    </View>
)
const renderItem7 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image2}/>
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
            <ScrollView>

            <Text style={styles.textEspeciais}>Especiais do Chefe</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={especiais}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
            />

            <Text style={styles.textEspeciais}>Grelhados no Fogo</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={grelhados}
            renderItem={renderItem3}
            keyExtractor={(item) => item.id}
            />

            <Text style={styles.textEspeciais}>Cozimento Lento</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={cozimento}
            renderItem={renderItem4}
            keyExtractor={(item) => item.id}
            />

            <Text style={styles.textEspeciais}>Frutos do Mar</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={frutoMar}
            renderItem={renderItem5}
            keyExtractor={(item) => item.id}
            />

            <Text style={styles.textEspeciais}>Sobremesas</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={sobremesa}
            renderItem={renderItem6}
            keyExtractor={(item) => item.id}
            />
            <Text style={styles.textEspeciais}>Carta de Vinhos</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={vinhos}
            renderItem={renderItem7}
            keyExtractor={(item) => item.id}
            />
            </ScrollView>
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
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/menu.png')}
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
    },
    textEspeciais: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 19,
        marginBottom:19
    },
    image2: {
        width: 150,
        height: 350,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
})
export default FlatListCardapio;