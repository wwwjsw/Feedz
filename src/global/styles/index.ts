import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
IconMaterial.loadFont();

interface IStyleGlobal {
   tintColor?: string | undefined;
   marign?: string | undefined;
}

export const Container = styled.SafeAreaView`
   flex: 1;
   background-color: #443151;
`;

export const IconDrawerCommunity = styled(Icon)``;
