import {Text, View, Image} from 'react-native'

import estilo from './style'

export default function Card({porcentagem,titulo,Imagem,descrição}){

return(

<View style={estilo.cardTarefa}>

<Image style={estilo.imagemCard} source={{ uri: Imagem }} />

<View style={{ marginLeft: 15,width:150 }}>

<Text style={estilo.tituloCard}>{titulo}</Text>

<Text style={estilo.textoCard}>{descrição}</Text>

</View>

<Text style={{ fontSize: 25 }}>{porcentagem}</Text>

</View>

)
}