import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');

interface IColorError {
   error: boolean;
}

interface IColorText {
   cor: string;
}

Icon.loadFont();

export const Container = styled.View`
   flex: 1;
   background: #741171;
   align-items: center;
   height: ${window.height}px;
`;

export const ScrollFull = styled.ScrollView``;

export const ViewLogo = styled.View`
   align-items: center;
   justify-content: center;
   margin-bottom: 10px;
`;

export const ImgLogo = styled.Image`
   margin-top: 60px;
   height: 120px;
   width: 120px;
`;

export const Label = styled.Text<IColorError>`
   font-size: 14px;
   color: ${(props): string => (props.error ? '#d32f2f' : '#000')};
   margin: 20px 10px 5px 18px;
   font-family: 'Roboto-Medium';
`;

export const Form = styled.View`
   background: #fff;
   width: 90%;
   margin-bottom: 10px;
`;

export const ViewInput = styled.View<IColorError>`
   border-width: 1.1px;
   border-radius: 2px;
   border-color: ${(props): string => (props.error ? '#d32f2f' : '#00000026')};
   margin: 0 18px;
   padding: ${Platform.OS === 'ios' ? '10px 0' : '0'};
   flex-direction: row;
   align-items: center;
`;

export const FormInput = styled.TextInput`
   flex: 1;
   font-size: 16px;
   color: #00000099;
`;

export const ButtonEntrar = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   background-color: #741171;
   margin: 30px 18px 20px 18px;
   height: 50px;
`;

export const TextButtonEntrar = styled.Text`
   font-size: 16px;
   color: #fff;
   font-family: 'Roboto-Medium';
`;

export const ButtonCadastro = styled.TouchableOpacity`
   justify-content: center;
   align-items: center;
   font-family: 'Roboto-Medium';
`;

export const TextButtonCadastro = styled.Text`
   font-size: 16px;
   margin-bottom: 10px;
   color: #741171;
   font-family: 'Roboto-Regular';
`;

export const IconInput = styled(Icon)`
   margin: 0 10px;
`;

export const ViewError = styled.View`
   margin-left: 18px;
`;

export const LabelError = styled.Text`
   font-family: 'Roboto-Medium';
   color: #d32f2f;
   font-size: 11px;
`;

/** TELA DE ERRO */
export const TextErrorTitle = styled.Text`
   font-family: 'Roboto-Regular';
   font-size: 24px;
   color: #3c3c3c;
   margin: 30px 50px 0 50px;
   text-align: center;
`;

export const TextErrorDesc = styled.Text`
   font-family: 'Roboto-Regular';
   font-size: 14px;
   color: #3c3c3c;
   margin: 20px 50px;
   text-align: center;
`;

export const TextButtonError = styled.Text<IColorText>`
   font-family: 'Roboto-Regular';
   font-size: 13px;
   color: ${(props): string => props.cor};
`;

export const ButtonError = styled.TouchableOpacity`
   border-radius: 2px;
   align-items: center;
   justify-content: center;
   background-color: #0f76bb;
   margin: 30px 18px 10px 18px;
   height: 50px;
`;

export const ButtonErrorCancelar = styled.TouchableOpacity`
   border-radius: 2px;
   align-items: center;
   justify-content: center;
   border-width: 1.1px;
   border-radius: 2px;
   border-color: #00000026;
   background: #f4f5f7;
   margin: 5px 18px 20px 18px;
   height: 50px;
   flex-direction: row;
`;

export const ViewQuadrado = styled.View`
   height: 100px;
   width: 100px;
   background: #bfbfbf;
`;
