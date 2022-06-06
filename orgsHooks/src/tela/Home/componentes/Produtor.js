import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

export default function Produtor({nome, imagem, distancia, estrelas }){
    const [selected, setSelected] = useState(false);

   return <TouchableOpacity style={estilos.card}
                            onPress={() => setSelected(!selected)}
   >
       <Image style={estilos.imagem} source={imagem} />
       <View style={estilos.info}>
           <View>
               <Text style={estilos.nome}>{ nome }</Text>
               <Estrelas 
                qtd={estrelas}
                editavel={selected}
                grande={selected}
               />
           </View>
            <Text style={estilos.distancia}>{distancia}</Text>
       </View>
   </TouchableOpacity>
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 3
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
})