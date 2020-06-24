/* eslint-disable react/jsx-curly-newline */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as LoginAction from '../../../store/modules/Login/actions';

import IconLogo from '../../assets/img/SplashScreen.png';

import {
   ButtonEntrar,
   Container,
   ScrollFull,
   FormInput,
   TextButtonEntrar,
   Form,
   Label,
   ImgLogo,
   ViewLogo,
   ButtonCadastro,
   TextButtonCadastro,
   ViewInput,
   IconInput,
   LabelError,
   ViewError,
   ButtonError,
   ButtonErrorCancelar,
   TextErrorDesc,
   TextErrorTitle,
   TextButtonError,
   ViewQuadrado,
} from './styles';

const Login: React.FC = () => {
   const navigation = useNavigation();
   const [password, setPassword] = useState('cityslicka');
   const [user, setUser] = useState('eve.holt@reqres.in');
   const [verSenha, setVerSenha] = useState(false);
   const [erroLogin, setErroLogin] = useState(false);
   const [erroBack, setErroBack] = useState(401);

   const passwordRef = useRef<TextInput>(null);
   const dispatch = useDispatch();

   const handleSignin = (): void => {
      dispatch(LoginAction.signInRequest(user, password));
   };

   const handleRevelarSenha = (): void => {
      setVerSenha(!verSenha);
   };

   return (
      <ScrollFull>
         <Container>
            <ViewLogo>
               <ImgLogo resizeMode="contain" source={IconLogo} />
            </ViewLogo>

            <Form>
               {erroBack === 403 ? (
                  <>
                     <TextErrorTitle>HOUVE UM ERRO DE CONEXÃO</TextErrorTitle>
                     <TextErrorDesc>
                        Parece que você não está conectado a internet
                     </TextErrorDesc>

                     <View
                        style={{
                           alignItems: 'center',
                           justifyContent: 'center',
                        }}
                     >
                        <ViewQuadrado />
                     </View>

                     <ButtonError>
                        <TextButtonError cor="#fff">
                           TENTAR NOVAMENTE
                        </TextButtonError>
                     </ButtonError>

                     <ButtonErrorCancelar>
                        <TextButtonError cor="#1477BA">
                           CANCELAR
                        </TextButtonError>
                     </ButtonErrorCancelar>
                  </>
               ) : (
                  <>
                     <Label error={erroLogin}>Login</Label>
                     <ViewInput error={erroLogin}>
                        <IconInput
                           color={erroLogin ? '#d32f2f' : '#000'}
                           size={26}
                           name="person"
                        />
                        <FormInput
                           placeholder="Usuário, E-mail ou Celular"
                           placeholderTextColor="#00000099"
                           autoCorrect={false}
                           value={user}
                           onChangeText={setUser}
                           returnKeyType="next"
                           onSubmitEditing={(): void =>
                              passwordRef.current?.focus()
                           }
                        />
                        {erroLogin && (
                           <IconInput color="#d32f2f" size={26} name="error" />
                        )}
                     </ViewInput>
                     {erroLogin && (
                        <ViewError>
                           <LabelError>Usuário inválido</LabelError>
                        </ViewError>
                     )}

                     <Label error={erroLogin}>Senha</Label>
                     <ViewInput error={erroLogin}>
                        <IconInput
                           color={erroLogin ? '#d32f2f' : '#000'}
                           size={26}
                           name="lock"
                        />
                        <FormInput
                           placeholder="Senha"
                           placeholderTextColor="#00000099"
                           autoCorrect={false}
                           value={password}
                           onChangeText={setPassword}
                           secureTextEntry={!verSenha}
                           ref={passwordRef}
                           returnKeyType="send"
                           onSubmitEditing={handleSignin}
                        />

                        <TouchableOpacity onPress={handleRevelarSenha}>
                           <IconInput
                              color="#90A4AE"
                              name="remove-red-eye"
                              size={26}
                           />
                        </TouchableOpacity>
                     </ViewInput>
                     {erroLogin && (
                        <ViewError>
                           <LabelError>Senha inválida</LabelError>
                        </ViewError>
                     )}

                     <ButtonEntrar onPress={handleSignin}>
                        <TextButtonEntrar>Entrar</TextButtonEntrar>
                     </ButtonEntrar>

                     <ButtonCadastro
                        onPress={(): void => navigation.navigate('Cadastro')}
                     >
                        <TextButtonCadastro>Cadastro</TextButtonCadastro>
                     </ButtonCadastro>
                  </>
               )}
            </Form>
         </Container>
      </ScrollFull>
   );
};

export default Login;
