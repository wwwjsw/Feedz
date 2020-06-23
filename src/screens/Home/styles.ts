import styled from 'styled-components/native';
import { Platform, FlatList } from 'react-native';

interface IActionButtonProps {
   marginTop: string;
   backgroundColor?: string;
}

interface IFormControlProps {
   borderColor: string;
}

interface ILabelProps {
   labelColor: string;
}

export const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const ModalNewPost = styled.View`
   padding: 20px 10px;
   margin: auto auto;
   min-width: 80%;
   background: #ffffff;
   border-radius: 10px;
   border-width: 2px;
   border-color: #000;
`;

export const PostList = styled.FlatList`
   background: #741171;
   width: 100%;
`;

export const PostCard = styled.View`
   background: #fff;
   padding: 10px;
   margin: 10px 10px;
   border-radius: 5px;
   flex-direction: row;
`;

export const PostCardTitle = styled.View`
   flex-direction: row;
   justify-content: space-around;
`;

export const PostCardName = styled.Text`
   font-family: 'Roboto-Black';
   font-size: 16px;
   text-transform: capitalize;
`;

export const PostCardNameDelete = styled.Text`
   font-family: 'Roboto-Black';
   font-size: 16px;
   text-transform: capitalize;
   text-align: center;
`;

export const PostCardData = styled.Text`
   font-family: 'Roboto-Regular';
`;

export const PostCardAvatar = styled.Image`
   width: 80px;
   height: 80px;
   border-radius: 40px;
`;

export const PostCardText = styled.Text`
   font-family: 'Roboto-Light';
   font-size: 14px;
`;

export const PostCardActions = styled.View`
   justify-content: space-between;
`;

export const PostCardContent = styled.View`
   justify-content: space-around;
   margin: 0 10px;
   flex: 1;
`;

export const FabButton = styled.TouchableOpacity`
   width: 80px;
   height: 80px;
   position: absolute;
   bottom: 20px;
   right: 20px;
   align-items: center;
   justify-content: center;
   background: #000;
   border-radius: 40px;
   border-width: 1px;
   border-color: #fff;
`;

export const FormControl = styled.View<IFormControlProps>`
   padding: ${Platform.OS === 'ios' ? '10px 5px' : '0 10px'};
   margin: 0px 10px 10px 10px;
   align-self: stretch;
   background-color: #00000005;
   border: 1px solid ${(props): string => props.borderColor};
   flex-direction: row;
   align-items: flex-start;
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
   align-items: center;
   justify-content: center;
   margin-top: ${(props): string => props.marginTop};
   background-color: ${(props): string => props.backgroundColor || '#741171'};
   margin-left: 10px;
   margin-right: 10px;
`;

export const TextButton = styled.Text`
   font-size: 14px;
   font-family: 'Roboto-Medium';
   color: #ffffff;
   text-transform: uppercase;
`;
