import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [idade,setIdade]= useState('');
  const [peso, setPeso]= useState('');
  const [altura,setAltura]= useState('');
  const [qtdeHomens, setHomem]= useState('');
  const [qtdeMulheres, setMulheres]= useState('');
  const [qtdeCriancas, setCriancas]= useState('');
 //variavel, função que atualiza a variavel
  }

  return (
    //Text significa texto
    //TextInput significa 
    <View style={styles.container}>
      <Text>moraes 14</Text> 
      <TextInput
      placeholder= 'Digite sua Idade' // Placeholder é o texto que aparece dentro da caixinha
      onChangeText={(pIdade)=>setIdade(pIdade)} // onChangeText 
    />
    
    
    <Button title= "ver mensagem" onPress={()=>{
       // if: se sua idade for maior que 18, você é maior de idade (if significa SE)
       if(idade>=18){ 
        alert('Você é maior de idade')
      //else: Se não a idade for menor que 18, então você é menor de idade (else significa SE NÃO)
      }else{
        alert('Você é menor de idade');
      }  
    }
    }

    //button significa botão
    // onPress significa ao pressionar
    />  
  

<Text>ATIVIDADE 2 NUMERO IMC</Text>
      <TextInput
        placeholder='Digite o seu peso em kg'
        onChangeText={(pPeso)=>setPeso(parseFloat(pPeso))}
      />
      <TextInput
        placeholder='Digite a seu Altura em cm'
        onChangeText={(pAltura)=>setAltura(parseFloat(pAltura))}
      />

      <Button
        title='Calcular IMC' onPress={()=> {
          const pesoNum = parseFloat(peso) || 0;
          const alturaNum = parseFloat(altura) || 1;
          const IMC = pesoNum / ((alturaNum / 100) * (alturaNum / 100));

          let resultado;
          if (IMC < 18.5) resultado = 'abaixo do peso';
          else if (IMC < 25) resultado = 'peso normal';
          else if (IMC < 30) resultado = 'sobrepeso';
          else if (IMC < 35) resultado = 'obesidade grau 1';
          else if (IMC < 40) resultado = 'obesidade grau 2';
          else resultado = "obesidade grau 3";
          alert(resultado);
        }}
     />
    
    <Text>ATIVIDADE 3- FAZER UM CHURRASCO</Text>
      <TextInput
        placeholder='Digite a quantidade de homens adultos'
        onChangeText={(pHomens)=>setHomem(parseFloat(pHomens))}
      />
      <TextInput
        placeholder='Digite a quantidade de mulheres adultos'
        onChangeText={(pMulheres)=>setMulheres(parseFloat(pMulheres))}
      />
      <TextInput
        placeholder='Digite a quantidade de crianças adultos'
        onChangeText={(pCriancas)=>setCriancas(parseFloat(pCriancas))}
      />

      <Button
        title='Calcular a quantidade de carne e carvao necessarias' onPress={()=> {
          const carneHomensNum = parseFloat(qtdeHomens * 400) / 1000; 
          const carneMulheresNum = parseFloat(qtdeHomens * 300) / 1000; 
          const carneCriancasNum = parseFloat(qtdeHomens * 200) / 1000;
          const qtdeTotalCarne = carneHomensNum + carneMulheresNum + carneCriancasNum;
          const qtdeCarvao = (qtdeTotalCarne /6) * 5;

          alert(`A quantidade totalde carne necessaria é: ${qtdeTotalCarne} kg.
            Necessario para homens: ${qtdeHomens} kg.
            Necessario para mulheres: ${qtdeMulheres} kg.
            Necessario para criancas: ${qtdeCriancas} kg.
            A quantidade de carvão necessario é:${qtdeCarvao} kg.
            `)
        }}
      />
    
    
     <StatusBar style="auto"/>
     </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    frontSize:14,
    borderWidth:1,
    padding:10,
    marginBottom:10,
    marginTop:10,
    width:300
  },
});
