import React, { ReactElement, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as AuthActions from '../../store/modules/Login/actions';
import Header from '../../components/Header';
import { INovidade } from '../../interfaces/INovidade';

import * as NovidadesActions from '../../store/modules/Novidades/actions';
import defaultPicture from '../../global/assets/icons/boticario.png';

import {
   Container,
   PostList,
   PostCard,
   PostCardTitle,
   PostCardAvatar,
   PostCardName,
   PostCardData,
   PostCardContent,
   PostCardText,
   PostCardNoPosts,
   FabButton,
} from './styles';

const Home: React.FC = () => {
   const dispatch = useDispatch();
   const navigation = useNavigation();

   const [data, setData] = useState<INovidade>();
   const loading = useSelector((state) => state.novidades.loading);

   useEffect(() => {
      async function getTokenFromStorage(): Promise<void> {
         const novidades = await AsyncStorage.getItem('novidades');

         if (novidades) {
            setData(JSON.parse(novidades));
         }
      }

      getTokenFromStorage();
   }, [loading]);

   const toggleDrawer = (): void => {
      navigation.dispatch(DrawerActions.toggleDrawer());
   };

   function handleSubmit(): void {
      dispatch(AuthActions.signOutRequest());
   }

   function Item({ post }: { post: INovidade }): ReactElement {
      return (
         <PostCard>
            <PostCardTitle>
               <PostCardAvatar
                  source={{
                     uri: post.user.profile_picture,
                  }}
                  defaultSource={defaultPicture}
               />
            </PostCardTitle>
            <PostCardContent>
               <PostCardName>{post.user.name}</PostCardName>
               <PostCardData>
                  {new Date(post.message.created_at).toUTCString()}
               </PostCardData>
               <PostCardText>{post.message.content}</PostCardText>
            </PostCardContent>
         </PostCard>
      );
   }

   return (
      <>
         <Header
            title="Home"
            onDrawer={toggleDrawer}
            onFilter={handleSubmit}
            color="#741171"
         />
         <Container>
            {data ? (
               <PostList
                  data={data}
                  renderItem={({ item }: { item: INovidade }): ReactElement => (
                     <Item post={item} />
                  )}
                  keyExtractor={(item: INovidade): string => {
                     return item.message.content;
                  }}
               />
            ) : (
               <PostCardNoPosts>
                  Ainda não tem nada aqui 🤷🏽, tente atualizar as novidades! 👇🏽
               </PostCardNoPosts>
            )}

            <FabButton
               onPress={(): void => {
                  dispatch(NovidadesActions.novidadesRequest());
               }}
            >
               <Icon color="#ffffff" name="refresh" size={32} />
            </FabButton>
         </Container>
      </>
   );
};

export default Home;