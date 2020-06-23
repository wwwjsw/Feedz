import styled from 'styled-components/native';
import { Platform } from 'react-native';

interface IActionButtonProps {
   marginTop: string;
}

interface IFormControlProps {
   borderColor: string;
}

interface ILabelProps {
   labelColor: string;
}

export const Container = styled.View`
   flex: 1;
   background: #741171;
   justify-content: center;
   align-items: center;
`;

export const Content = styled.View`
   margin: 20px;
   padding: 20px;
   align-self: stretch;
   background-color: #ffffff;
   align-items: center;
`;

export const Row = styled.View`
   flex-direction: row;
`;

export const Title = styled.Text`
   font-size: 24px;
   font-family: 'Roboto-Regular';
   color: #212121;
`;

export const Paragraph = styled.Text`
   font-size: 14px;
   font-family: 'Roboto-Regular';
   color: #212121;
   text-align: center;
   margin: 10px 0px 20px 0px;
`;

export const Label = styled.Text<ILabelProps>`
   width: 100%;
   font-size: 11px;
   font-family: 'Roboto-Medium';
   color: ${(props): string => props.labelColor};
   margin-left: 20px;
`;

export const FormControl = styled.View<IFormControlProps>`
   padding: ${Platform.OS === 'ios' ? '10px 5px' : '0 10px'};
   margin: 0px 10px 10px 10px;
   align-self: stretch;
   background-color: #00000005;
   border: 1px solid ${(props): string => props.borderColor};
   flex-direction: row;
   align-items: center;
`;

export const FormInput = styled.TextInput`
   color: #212121;
   font-size: 14px;
   font-family: 'Roboto-Regular';
   flex: 1;
   margin-left: 5px;
`;

export const ActionButton = styled.TouchableOpacity<IActionButtonProps>`
   padding: 15px;
   align-self: stretch;
   background-color: #741171;
   align-items: center;
   justify-content: center;
   margin-top: ${(props): string => props.marginTop};
   margin-left: 10px;
   margin-right: 10px;
`;

export const TextButton = styled.Text`
   font-size: 13px;
   font-family: 'Roboto-Medium';
   color: #ffffff;
   text-transform: uppercase;
`;

export const ErrorMessage = styled.Text`
   font-size: 11px;
   font-family: 'Roboto-Medium';
   color: #d32f2f;
   width: 100%;
   margin-left: 20px;
`;
