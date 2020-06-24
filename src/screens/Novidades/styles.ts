import styled from 'styled-components/native';

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

export const PostCardNoPosts = styled.Text`
   font-family: 'Roboto-Regular';
   font-size: 24px;
   margin: 20px;
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
