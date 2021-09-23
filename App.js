import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

export default function App(){
  const [Peso, setPeso] = useState('');
  const [Altura, setAltura] = useState('');

  function handleSubmit(){
     const alt = Altura/100;
     const imc = Peso/ (alt * alt);
    
     if(imc <18.6){
       alert('Você está abaixo do peso!' + imc.toFixed(2));
     }
     else if (imc >= 18.6 && imc <24.9){
       alert('Peso ideal!' + imc.toFixed(2));
     }
     else {
       (imc >= 24.9 && imc < 34.9)
         alert('Levemente acima do peso!' + imc.toFixed(2));
    
     }
  }
  return(
    <View style={styles.container}>
<Text style={styles.title}> Calcule seu IMC </Text> 

<TextInput
style={styles.input}
value={Peso}
onChangeText={(Peso) => setPeso(Peso)}
placeholder="peso (KG)"
keyboardType="numeric"
/>
<TextInput
style={styles.input}
value={Altura}
onChangeText={(Altura) => setAltura(Altura)}
placeholder="Altura (CM)"
keyboardType="numeric"
/>
<TouchableOpacity 
style={styles.button}
onPress={handleSubmit}>
<Text style={styles.buttonText}>CALCULAR</Text>

</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#121212'
  },
  title:{
    color: '#fff',
    textAlign: 'center',
    marginTop: 250,
    fontSize:30,
  },
  input:{
    backgroundColor:'#d7fbf5',
    borderRadius: 10,
    margin:15,
    padding:10,
    color: '#121212',
    fontSize:23,
  },
  button:{
    justifyContent:'center',
    alignItems: "center",
    margin:15,
    backgroundColor:'#d7fbf5',
    padding: 15,
    borderRadius:10,
  },
  buttonText:{
    color: '#121212',
    fontSize: 25
  }
}); 