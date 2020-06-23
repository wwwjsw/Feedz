import styled from 'styled-components/native';

interface ISideBar {
   color?: string | undefined;
   backColor?: string | undefined;
}

export const SidebarContainer = styled.View`
   height: 230px;
   margin-bottom: 10px;
`;

export const LogoutButton = styled.TouchableOpacity`
   padding: 10px;
   flex-direction: row;
   margin-left: 10px;
`;

export const TextButton = styled.Text<ISideBar>`
   margin-left: 24px;
   margin-top: 3px;
   color: ${(props): string | undefined => props.color};
   font-family: 'Roboto-Medium';
`;

export const ViewLine = styled.View<ISideBar>`
   height: 1px;
   background: ${(props): string | undefined => props.backColor};
   margin-left: 50px;
`;

export const ViewInfoCircle = styled.View`
   width: 100%;
   height: 90px;
   justify-content: center;
   align-items: center;
`;

export const ViewCircle = styled.View`
   width: 80px;
   height: 80px;
   border-radius: 40px;
   background: #cfd8dc;
   justify-content: center;
   align-items: center;
`;

export const TextAbreviateName = styled.Text`
   font-size: 34px;
   font-family: 'Roboto-Medium';
`;

export const ViewTextName = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;
export const TextName = styled.Text`
   font-family: 'Roboto-Regular';
   font-size: 20px;
   color: #fff;
`;
