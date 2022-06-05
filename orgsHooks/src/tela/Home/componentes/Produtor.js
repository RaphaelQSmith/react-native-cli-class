import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function Produtor({nome, imagem, distancia, estrelas }){
   return <View styles={estilos.card}>
       <Image source={imagem} />
       <View>
            <Text>{nome}</Text>
            <Text>{distancia}</Text>
       </View>
   </View>
}

const estilos = StyleSheet.create({
    card: {
        padding: 10,
        width: 100,
        flex: 1,
        
    },
})