import React from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";


function Carrinho(): React.JSX.Element {
    return (
       
        <View style={styles.container}>
            
            
            <StatusBar backgroundColor={"black"} barStyle={"light-content"}/>
            <View style={styles.header}>
                
                <Image 
                source={require('./assets/images/logo.jpeg')}
                style={styles.logo}/>
            </View>
                
            <View style={styles.body}>
                <Text style={styles.carrinhoVazio}>Seu carrinho está vazio</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Finalizar compra</Text>
                </TouchableOpacity>
            </View>
            
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
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/sacola.png')}
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
    body:{
        flex: 1,
        justifyContent:'center'
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
        paddingVertical: 10,
        
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
    },
    image3: {
        width: 260,
        height: 210,
        borderRadius: 15,
        borderWidth:1.5, 
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
      width:60,
      height:60,
      borderRadius: 50,
      borderWidth: 1.5,
      borderColor: 'white',
      marginLeft: 'auto'
    },
    carrinhoVazio: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center',       
            
    },
    button:{
        backgroundColor: 'white',
        width:150,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 100,
        borderRadius: 10,
    },
    buttonText:{
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',  
        marginTop: 10
    }


    
})
export default Carrinho;