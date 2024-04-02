import React from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
    image: any;
}

const Cardapio: Item[] = [

    { id: "1", nome: "𝒯𝑜𝓂𝒶𝒽𝒶𝓌𝓀", preco: "R$ 89,90", descricao: "Corte Tomahawk, porção de batatas gratinadas, molho chimichurri", image: require('./assets/images/carne1.jpg') },
    { id: "2", nome: "𝒯𝓊𝓉𝒶𝓃𝑜 𝒸𝑜𝓂 𝑔𝓇𝑒𝓂𝑜𝓁𝒶𝓉𝒶", preco: "R$ 75,00", descricao: "Macio tutano de boi servido com gremolata fresca e pães. Uma ótima opção de entrada.", image: require('./assets/images/prato2.jpg') },
    { id: "3", nome: "𝒫𝒾𝒸𝒶𝓃𝒽𝒶", preco: "R$ 145,00", descricao: "O corte mais desejado nos churrascos brasileiros, suas fibras macias e sua capa de gordura são responsáveis por garantir a consistência macia e o sabor inconfundível da picanha.", image: require('./assets/images/prato3.jpg') },
    { id: "5", nome: "𝒜𝓃𝒸𝒽𝑜", preco: "R$ 105,00", descricao: "Corte tradicional Argentino, bife alto e de carne bem marmorizada.", image: require('./assets/images/prato5.jpg') },
    { id: "6", nome: "𝐵𝑜𝓂𝒷𝑜𝓂 𝒹𝑒 𝒶𝓁𝒸𝒶𝓉𝓇𝒶", preco: "R$ 93,00", descricao: "Coração da Alcatra, peça nobre e extremamente macia.", image: require('./assets/images/prato6.jpg') },
    { id: "7", nome: "𝐹𝒾𝓁𝑒𝓉 𝓂𝒾𝑔𝓃𝑜𝓃", preco: "R$ 99,00", descricao: "O corte mais macio da carne bovina. O clássico sem erros.", image: require('./assets/images/prato7.jpg') },
    { id: "8", nome: "𝐹𝒾𝓁𝑒 𝒹𝑒 𝒻𝓇𝒶𝓃𝑔𝑜 𝓂𝒶𝓇𝒾𝓃𝒶𝒹𝑜", preco: "R$ 61,00", descricao: "Clássico filé do peito do frango, aqui marinado com mostarda, molho inglês e ervas.", image: require('./assets/images/prato8.jpg') },
    { id: "9", nome: "𝐹𝓇𝒶𝓁𝒹𝒾𝓃𝒽𝒶", preco: "R$ 139,00", descricao: "Corte muito macio do boi, entra a costela e o traseiro, com uma gordura bem distribuída, é etremamente versátil e fica incrível grelhado no fogo!", image: require('./assets/images/prato9.jpg') },
    { id: "10", nome: "𝐹𝓁𝒶𝓉 𝐼𝓇𝑜𝓃", preco: "R$ 115,00", descricao: "Corte da paleta bovina, o flat iron é uma carne supreendentemente macia e saborosa!", image: require('./assets/images/prato10.jpg') },
    { id: "11", nome: "𝒫𝒾𝒸𝒶𝓃𝒽𝒶 𝒹𝑒 𝒞𝑜𝓇𝒹𝑒𝒾𝓇𝑜", preco: "R$ 125,00", descricao: "O corte de maior sucesso entre os brasileiros, agora na versão cordeiro. Proveniente de animais criados nas pastagens da Patagônia Chilena. Carne macia, suculenta e saborosa.", image: require('./assets/images/prato11.jpg') },
    { id: "12", nome: "𝒞𝑜𝓈𝓉𝑒𝓁𝒶 𝒷𝑜𝓋𝒾𝓃𝒶", preco: "R$ 102,00", descricao: "Tradicional costela bovina ao estilo gaúcho, assada por 10 horas até quase desmanchar.", image: require('./assets/images/prato12.jpg') },
    { id: "13", nome: "𝒮𝒶𝓁𝓂𝒶𝑜", preco: "R$ 99,00", descricao: "Lombo de salmão grelhado.", image: require('./assets/images/image13.jpg') },
    { id: "14", nome: "𝐹𝒾𝓁𝑒 𝒹𝑒 𝒯𝒾𝓁𝒶𝓅𝒾𝒶", preco: "R$ 35,00", descricao: "Filé de peixe branco grelhado.", image: require('./assets/images/image14.jpg') },
    { id: "15", nome: "𝐵𝓇𝑜𝓌𝓃𝒾𝑒", preco: "R$ 54,00", descricao: "Pedaço generoso de borwnie, servido com sorvete de creme e uma calda quente de chocolate.", image: require('./assets/images/sobremesa1.jpg') },
    { id: "16", nome: "𝐵𝒶𝓈𝑒 𝒷𝒶𝓃𝑜𝒻𝒻𝑒𝑒", preco: "R$ 45,00", descricao: "Uma banoffee a nossa maneira: banana, doce de leite e crumble de canela servido quentes, cobertos por sorvete de crème.", image: require('./assets/images/sobremesa2.jpg') },
    { id: "17", nome: "𝑀𝒶ç𝒶𝓈 𝒸𝒶𝓇𝒶𝓂𝑒𝓁𝒶𝒹𝒶𝓈 𝒸𝑜𝓂 𝓈𝑜𝓇𝓋𝑒𝓉𝑒", preco: "R$ 53,00", descricao: "Maçãs assadas servidas com crumble, canela e uma deliciosa calda de caramelo. Sem esquecer do sorvete cremoso de crème.", image: require('./assets/images/sobremesa3.jpg') },
    { id: "18", nome: "𝒞𝒽𝑒𝑒𝓈𝑒𝒸𝒶𝓀𝑒 𝒸𝑜𝓂 𝒻𝓇𝓊𝓉𝒶𝓈 𝓋𝑒𝓇𝓂𝑒𝓁𝒽𝒶𝓈", preco: "R$ 45,00", descricao: "Fatia de cheesecake coberto por calda de frutas.", image: require('./assets/images/sobremesa4.jpg') },
    { id: "19", nome: "𝒱𝑒𝓊𝓋𝑒 𝒞𝓁𝒾𝒸𝓆𝓊𝑜𝓉 𝐵𝓇𝓊𝓉", preco: "R$ 870,00", descricao: "De coloração palha, com borbulhas finas e intensas e aromas finos de maçã, pera madura, flores brancas, brioche e tostado.", image: require('./assets/images/bebida1Sembg.png') },
    { id: "20", nome: "𝒟𝑜𝓂 𝒫𝑒𝓇𝒾𝑔𝓃𝑜𝓃 𝒱𝒾𝓃𝓉𝒶𝑔𝑒", preco: "R$ 2.599,00", descricao: "Fresco, cristalino e penetrante, o primeiro nariz revela um mundo vegetal e aquático únicos com sugestões de pimenta branca e gardênia. A maturidade do vinho se apresenta através de toques de turfa.", image: require('./assets/images/bebida2Sembg.png') },
    { id: "21", nome: "𝒟𝑒𝓁𝒶𝓈 𝒱𝒾𝑜𝑔𝓃𝒾𝑒𝓇", preco: "R$ 365,00", descricao: "A Viognier é, sem dúvidas, a grande variedade branca do Rhône, no sul da França. Este cuvée é produzido a partir de uvas cultivadas nas encostas perto da Pont du Gard. Solo Villafranchian argila-calcário.", image: require('./assets/images/bebida3-removebg-preview.png') },
    { id: "22", nome: "𝒜𝓇𝒷𝑜𝓁𝑒𝒹𝒶 𝒞𝒶𝓇𝓂𝑒𝓃𝑒𝓇𝑒", preco: "R$ 389,00", descricao: "Vinho de coloração intensamente violeta e profunda, este vinho revela uma penetrante mistura de aromas. O vinho se abre com notas doces de especiarias que lembram canela e baunilha, as quais se envolvem com características de pimenta negra e pimentão vermelho assado. ", image: require('./assets/images/bebida4-removebg-preview.png') },
    { id: "23", nome: "𝒫𝓊𝓇𝓅𝓁𝑒 𝑅𝒶𝒾𝓃", preco: "R$ 43,00", descricao: "Gin BEG tropical e xarope de flor de sabugueiro, finalizado com tônica rosê orgânica.", image: require('./assets/images/bebida5.jpg') },
    { id: "24", nome: "𝒲𝒶𝓉𝑒𝓇𝓁𝑜𝑜", preco: "R$ 45,00", descricao: "Um drink super refrescante a base de gin BEG Navy, campari, limão e suco de melancia.", image: require('./assets/images/bebida6.jpg') },
    { id: "25", nome: "𝒩𝒴 𝒮𝑜𝓊𝓇", preco: "R$ 42,00", descricao: "Um clássico whisky sour com um toque de vinho tinto.", image: require('./assets/images/bebida7.jpg') },
    { id: "26", nome: "𝒮𝓊𝓃𝓈𝑒𝓉, 𝓅𝑜𝓇 𝒜𝒫𝒯𝒦 ", preco: "R$ 42,00", descricao: "Drink produzido exclusivamente para o hotel Pullman Guarulhos pelo renomado bartender Alê D'agostino. Composto por vermute bianco, cachaça, amaro e jerez, finalizado com zest de limão. Suave e a cara do nosso pôr do sol.", image: require('./assets/images/bebida8.jpg') },
];





/* separar em categorias*/
/*const especiais: Item[] =[
    {id: "1", nome: "𝒯𝑜𝓂𝒶𝒽𝒶𝓌𝓀", preco: "R$ 89,90", descricao: "Corte Tomahawk, porção de batatas gratinadas, molho chimichurri", image: require('./assets/images/carne1.jpg')},
    {id: "2", nome: "𝒯𝓊𝓉𝒶𝓃𝑜 𝒸𝑜𝓂 𝑔𝓇𝑒𝓂𝑜𝓁𝒶𝓉𝒶", preco: "R$ 75,00", descricao: "Macio tutano de boi servido com gremolata fresca e pães. Uma ótima opção de entrada.", image: require('./assets/images/prato2.jpg') },
    {id: "3", nome: "𝒫𝒾𝒸𝒶𝓃𝒽𝒶", preco: "R$ 145,00", descricao: "O corte mais desejado nos churrascos brasileiros, suas fibras macias e sua capa de gordura são responsáveis por garantir a consistência macia e o sabor inconfundível da picanha.",image: require('./assets/images/prato3.jpg') },
];*/
/*const grelhados: Item[] = [
    {id: "5", nome: "𝒜𝓃𝒸𝒽𝑜", preco: "R$ 105,00", descricao: "Corte tradicional Argentino, bife alto e de carne bem marmorizada.",image: require('./assets/images/prato5.jpg') },
    {id: "6", nome: "𝐵𝑜𝓂𝒷𝑜𝓂 𝒹𝑒 𝒶𝓁𝒸𝒶𝓉𝓇𝒶", preco: "R$ 93,00", descricao: "Coração da Alcatra, peça nobre e extremamente macia.",image: require('./assets/images/prato6.jpg') },
    {id: "7", nome: "𝐹𝒾𝓁𝑒𝓉 𝓂𝒾𝑔𝓃𝑜𝓃", preco: "R$ 99,00", descricao: "O corte mais macio da carne bovina. O clássico sem erros." ,image: require('./assets/images/prato7.jpg') },
    {id: "8", nome: "𝐹𝒾𝓁𝑒 𝒹𝑒 𝒻𝓇𝒶𝓃𝑔𝑜 𝓂𝒶𝓇𝒾𝓃𝒶𝒹𝑜", preco: "R$ 61,00", descricao: "Clássico filé do peito do frango, aqui marinado com mostarda, molho inglês e ervas." ,image: require('./assets/images/prato8.jpg')},
    {id: "9", nome: "𝐹𝓇𝒶𝓁𝒹𝒾𝓃𝒽𝒶", preco: "R$ 139,00", descricao: "Corte muito macio do boi, entra a costela e o traseiro, com uma gordura bem distribuída, é etremamente versátil e fica incrível grelhado no fogo!" ,image: require('./assets/images/prato9.jpg')},
    {id: "10", nome: "𝐹𝓁𝒶𝓉 𝐼𝓇𝑜𝓃", preco: "R$ 115,00", descricao: "Corte da paleta bovina, o flat iron é uma carne supreendentemente macia e saborosa!" ,image: require('./assets/images/prato10.jpg')},
    {id: "11", nome: "𝒫𝒾𝒸𝒶𝓃𝒽𝒶 𝒹𝑒 𝒞𝑜𝓇𝒹𝑒𝒾𝓇𝑜", preco: "R$ 125,00", descricao: "O corte de maior sucesso entre os brasileiros, agora na versão cordeiro. Proveniente de animais criados nas pastagens da Patagônia Chilena. Carne macia, suculenta e saborosa." ,image: require('./assets/images/prato11.jpg')},
];*/
/*const cozimento: Item[] = [
    {id: "12", nome: "𝒞𝑜𝓈𝓉𝑒𝓁𝒶 𝒷𝑜𝓋𝒾𝓃𝒶", preco: "R$ 102,00", descricao: "Tradicional costela bovina ao estilo gaúcho, assada por 10 horas até quase desmanchar." ,image: require('./assets/images/prato12.jpg')},
];*/
/*const frutoMar: Item[] = [
    {id: "13", nome: "𝒮𝒶𝓁𝓂𝒶𝑜", preco: "R$ 99,00", descricao: "Lombo de salmão grelhado." ,image: require('./assets/images/image13.jpg')},
    {id: "14", nome: "𝐹𝒾𝓁𝑒 𝒹𝑒 𝒯𝒾𝓁𝒶𝓅𝒾𝒶", preco: "R$ 35,00", descricao: "Filé de peixe branco grelhado." ,image: require('./assets/images/image14.jpg')},
];*/
/*const vinhos: Item[] = [

    {id: "19", nome: "𝒱𝑒𝓊𝓋𝑒 𝒞𝓁𝒾𝒸𝓆𝓊𝑜𝓉 𝐵𝓇𝓊𝓉", preco: "R$ 870,00", descricao: "De coloração palha, com borbulhas finas e intensas e aromas finos de maçã, pera madura, flores brancas, brioche e tostado." ,image: require('./assets/images/bebida1Sembg.png')},
    {id: "20", nome: "𝒟𝑜𝓂 𝒫𝑒𝓇𝒾𝑔𝓃𝑜𝓃 𝒱𝒾𝓃𝓉𝒶𝑔𝑒", preco: "R$ 2.599,00", descricao: "Fresco, cristalino e penetrante, o primeiro nariz revela um mundo vegetal e aquático únicos com sugestões de pimenta branca e gardênia. A maturidade do vinho se apresenta através de toques de turfa." ,image: require('./assets/images/bebida2Sembg.png')},
    {id: "21", nome: "𝒟𝑒𝓁𝒶𝓈 𝒱𝒾𝑜𝑔𝓃𝒾𝑒𝓇", preco: "R$ 365,00", descricao: "A Viognier é, sem dúvidas, a grande variedade branca do Rhône, no sul da França. Este cuvée é produzido a partir de uvas cultivadas nas encostas perto da Pont du Gard. Solo Villafranchian argila-calcário." ,image: require('./assets/images/bebida3-removebg-preview.png')},
    {id: "22", nome: "𝒜𝓇𝒷𝑜𝓁𝑒𝒹𝒶 𝒞𝒶𝓇𝓂𝑒𝓃𝑒𝓇𝑒", preco: "R$ 389,00", descricao: "Vinho de coloração intensamente violeta e profunda, este vinho revela uma penetrante mistura de aromas. O vinho se abre com notas doces de especiarias que lembram canela e baunilha, as quais se envolvem com características de pimenta negra e pimentão vermelho assado. " ,image: require('./assets/images/bebida4-removebg-preview.png')},
];*/
/*const bebidas: Item[] = [

    {id: "23", nome: "𝒫𝓊𝓇𝓅𝓁𝑒 𝑅𝒶𝒾𝓃", preco: "R$ 43,00", descricao: "Gin BEG tropical e xarope de flor de sabugueiro, finalizado com tônica rosê orgânica." ,image: require('./assets/images/bebida5.jpg')},
    {id: "24", nome: "𝒲𝒶𝓉𝑒𝓇𝓁𝑜𝑜", preco: "R$ 45,00", descricao: "Um drink super refrescante a base de gin BEG Navy, campari, limão e suco de melancia." ,image: require('./assets/images/bebida6.jpg')},
    {id: "25", nome: "𝒩𝒴 𝒮𝑜𝓊𝓇", preco: "R$ 42,00", descricao: "Um clássico whisky sour com um toque de vinho tinto." ,image: require('./assets/images/bebida7.jpg')},
    {id: "26", nome: "𝒮𝓊𝓃𝓈𝑒𝓉, 𝓅𝑜𝓇 𝒜𝒫𝒯𝒦 ", preco: "R$ 42,00", descricao: "Drink produzido exclusivamente para o hotel Pullman Guarulhos pelo renomado bartender Alê D'agostino. Composto por vermute bianco, cachaça, amaro e jerez, finalizado com zest de limão. Suave e a cara do nosso pôr do sol." ,image: require('./assets/images/bebida8.jpg')},
];*/

const renderItem1 = ({ item }: { item: Item }) => (
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image} />
    </View>
)

const renderItem2 = ({ item }: { item: Item }) => (
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
/*const renderItem3 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
    </View>
)
const renderItem4 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
    </View>
)
const renderItem5 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
    </View>
)
const renderItem6 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image}/>
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
    </View>
)
const renderItem7 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image2}/>
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
    </View>
)
const renderItem8 = ({ item } : {item: Item}) =>(
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.nome}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.descricao}</Text>
        <Text style={styles.textItem}>---------------------------------------</Text>
        <Text style={styles.textItem}>{item.preco}</Text>
        <Image source={item.image} style={styles.image3}/>
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
    </View>
)*/


function FlatListCardapio(): React.JSX.Element {
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
                    data={Cardapio}
                    renderItem={renderItem2}
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