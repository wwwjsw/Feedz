import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
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

type FormData = {
   nome: string;
   email: string;
   senha: string;
};

const Cadastro: React.FC = () => {
   const navigation = useNavigation();
   const [formInputStyle, setFormInputStyle] = useState({
      labelColor: '#000',
      borderColor: '#00000026',
      iconColor: '#000',
   });
   const [errorMessage, setErrorMessage] = useState('');
   const { register, setValue, handleSubmit, errors } = useForm<FormData>();

   const onSubmit = (data): void => Alert.alert('Form Data', JSON.stringify(data));

   useEffect(() => {
      register({ name: 'nome' }, { required: true, minLength: 3 });
      register(
         { name: 'email' },
         {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         },
      );
      register({ name: 'senha' }, { required: true, minLength: 6 });
   }, [register]);

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
                  onChangeText={(text): void => setValue('nome', text, true)}
               />
            </FormControl>
            {errors.nome && (
               <Label labelColor="#790000">Verifique o nome</Label>
            )}
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
                  onChangeText={(text): void => setValue('email', text, true)}
               />
            </FormControl>
            {errors.email && (
               <Label labelColor="#790000">Verifique o email</Label>
            )}
            <Label labelColor={formInputStyle.labelColor}>Senha</Label>
            <FormControl borderColor={formInputStyle.borderColor}>
               <MDIcon name="lock" size={24} color={formInputStyle.iconColor} />
               <FormInput
                  placeholder="Insira sua senha"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(text): void => setValue('senha', text, true)}
               />
            </FormControl>
            {errors.senha && (
               <Label labelColor="#790000">Verifique a senha</Label>
            )}
            <ActionButton marginTop="10px" onPress={handleSubmit(onSubmit)}>
               <TextButton>Ok</TextButton>
            </ActionButton>
         </Content>
      </Container>
   );
};

export default Cadastro;
