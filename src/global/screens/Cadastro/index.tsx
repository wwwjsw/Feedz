import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
   Container,
   Content,
   Title,
   Paragraph,
   FormControl,
   Label,
   ActionButton,
   TextButton,
   FormInput,
   ErrorMessage,
   Row,
} from './styles';

MDIcon.loadFont();

const Cadastro: React.FC = () => {
   const navigation = useNavigation();
   const [formInputStyle, setFormInputStyle] = useState({
      labelColor: '#000',
      borderColor: '#00000026',
      iconColor: '#000',
   });
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const clearForm = (): void => {
      setTimeout(() => {
         setErrorMessage('');
         setFormInputStyle({
            labelColor: '#741171',
            borderColor: '#00000026',
            iconColor: '#741171',
         });
      }, 3000);
   };

   const validate = (): void => {
      if (data === '') {
         setErrorMessage('Chave inexistente');
         setFormInputStyle({
            labelColor: '#D32F2F',
            borderColor: '#D32F2F',
            iconColor: '#D32F2F',
         });

         clearForm();
      }
   };

   return (
      <Container>
         <Content>
            <Row>
               <TouchableOpacity onPress={(): void => navigation.goBack()}>
                  <MDIcon name="chevron-left" size={40} color="#741171" />
               </TouchableOpacity>
               <View
                  style={{
                     marginRight: 50,
                     marginLeft: 20,
                     justifyContent: 'center',
                  }}
               >
                  <Title>Cadastro</Title>
               </View>
            </Row>
            <Paragraph>
               Insira suas informaçōes para realizar o cadastro.
            </Paragraph>

            <Label labelColor={formInputStyle.labelColor}>Nome</Label>
            <FormControl borderColor={formInputStyle.borderColor}>
               <MDIcon
                  name="account"
                  size={24}
                  color={formInputStyle.iconColor}
               />
               <FormInput
                  placeholder="Insira seu nome"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={nome}
                  onChangeText={setNome}
               />
            </FormControl>

            <Label labelColor={formInputStyle.labelColor}>E-mail</Label>
            <FormControl borderColor={formInputStyle.borderColor}>
               <MDIcon
                  name="email"
                  size={24}
                  color={formInputStyle.iconColor}
               />
               <FormInput
                  placeholder="Insira seu e-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={setEmail}
               />
            </FormControl>

            <Label labelColor={formInputStyle.labelColor}>Senha</Label>
            <FormControl borderColor={formInputStyle.borderColor}>
               <MDIcon name="lock" size={24} color={formInputStyle.iconColor} />
               <FormInput
                  placeholder="Insira sua senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={senha}
                  onChangeText={setSenha}
               />
            </FormControl>
            <ErrorMessage>{errorMessage}</ErrorMessage>

            <ActionButton marginTop="10px" onPress={validate}>
               <TextButton>Ok</TextButton>
            </ActionButton>
         </Content>
      </Container>
   );
};

export default Cadastro;
