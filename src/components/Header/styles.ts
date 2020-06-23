import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

interface IHeaderStyle {
   align?: string | undefined;
   color?: string | undefined;
}

const marginBottom: number = Platform.OS === 'ios' ? 7 : 4;

export const Container = styled.View<IHeaderStyle>`
   ${Platform.select({
   ios: css`
         height: 80px;
         padding-left: 20px;
         padding-right: 20px;
      `,
   android: css`
         height: 80px;
         padding-left: 15px;
         padding-right: 20px;
      `,
})};
   background-color: ${(props): string | undefined => props.color};
   justify-content: center;
   elevation: 1;
`;

export const Content = styled.View``;

export const HeaderActionButton = styled.TouchableOpacity<IHeaderStyle>`
   width: 30px;
   height: 100%;
   align-items: center;
   justify-content: flex-end;
`;

export const ViewGeneric = styled.View<IHeaderStyle>`
   flex: 1;
   width: 100%;
   align-items: ${(props): string | undefined => props.align};
`;

export const ViewTitle = styled.View<IHeaderStyle>`
   flex: 1;
   align-items: ${(props): string | undefined => props.align};
   justify-content: flex-end;
   margin-bottom: ${marginBottom}px;
`;

export const Title = styled.Text`
   color: #ffffff;
   font-size: 20px;
   font-family: 'Roboto-bold';
`;

export const IconGoBack = styled.Image`
   width: 25px;
   height: 25px;
`;

export const HeaderIconActionButton = styled(Icon)``;

export const ContentJustfied = styled.View`
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 6px;
`;

export const CenterView = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const HeaderIconActionButtonRight = styled.Image`
   width: 20px;
   height: 20px;
   align-self: flex-end;
   tint-color: #fff;
`;

export const HeaderActionButtonRight = styled.TouchableOpacity`
   width: 20px;
   height: 20px;
   align-items: center;
   justify-content: center;
   flex: 1;
`;

export const ImageLogo = styled.Image`
   width: 40px;
   height: 40px;
`;

export const ViewNewIcon = styled.View`
   width: 30px;
`;
