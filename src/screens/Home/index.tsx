import React, { ReactElement, useState } from 'react';
import { Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as AuthActions from '../../store/modules/Login/actions';
import Header from '../../components/Header';
import { IPost } from '../../interfaces/IPosts';

import {
   ActionButton,
   TextButton,
   Container,
   ModalNewPost,
   PostList,
   PostCard,
   PostCardTitle,
   PostCardName,
   PostCardNameDelete,
   PostCardData,
   PostCardContent,
   PostCardAvatar,
   PostCardText,
   PostCardActions,
   FabButton,
   FormControl,
   FormInput,
   CountCaracter,
} from './styles';

const Home: React.FC = () => {
   const dispatch = useDispatch();
   const [modalVisible, setModalVisible] = useState(false);
   const [modalEditVisible, setModalEditVisible] = useState(false);
   const [postEdit, setPostEdit] = useState<IPost>();
   const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
   const [postDelete, setPostDelete] = useState('');
   const [data, setData] = useState('');
   const [postEditText, setPostEditText] = useState('');

   const [posts, setPosts] = useState([
      {
         id: '1001',
         nome: 'Guilherme henrique',
         foto: 'https://avatars3.githubusercontent.com/u/10338666?v=4',
         data: '2020-02-02T14:10:33Z',
         texto:
            'Espero que gostem do meu trabalho e que eu possa fazer parte do time! 🥳',
         usuario: 'beta',
      },
      {
         id: '1002',
         nome: 'Dinho',
         data: '2020-02-02T16:10:33Z',
         foto: 'https://api.adorable.io/avatars/285/abott@sa.as.png',
         texto: 'falta uma banda q una todas as tribos.Como foi o Norvana',
         usuario: 'teste',
      },
      {
         id: '1003',
         nome: 'Deborah',
         foto: 'https://api.adorable.io/avatars/285/porta@sa.as.png',
         data: '2020-02-02T16:10:33Z',
         texto: 'Vlw flw',
         usuario: 'teste',
      },
      {
         id: '1004',
         nome: 'Deborah',
         data: '2020-02-02T16:10:33Z',
         foto: 'https://api.adorable.io/avatars/285/porta@sa.as.png',
         texto: 'Gente, o que que é vlw flw?!?',
         usuario: 'teste',
      },
      {
         id: '1005',
         nome: 'William',
         data: '2020-02-02T16:10:33Z',
         foto: 'https://api.adorable.io/avatars/285/boos.png',
         texto:
            'Como dizem meus sobrinhos, rimos litros. Embora eu não entenda como se possa medir o volume espacial de risos. Mas tudo bem.',
         usuario: 'teste',
      },
      {
         id: '1006',
         nome: 'Eduardo',
         data: '2020-02-02T15:10:33Z',
         foto: 'https://api.adorable.io/avatars/285/booas.png',
         texto: 'Hoje eu finalmente entendi o que é um meme',
         usuario: 'teste',
      },
   ]);

   const navigation = useNavigation();

   const toggleDrawer = (): void => {
      navigation.dispatch(DrawerActions.toggleDrawer());
   };

   const submitNewPost = (texto: string): void => {
      const post = {
         id: (Math.random() * (1000 - 0) + 0).toString(),
         nome: 'Beta teste da silva',
         data: new Date().toISOString(),
         foto: 'https://api.adorable.io/avatars/285/betatestedasilva.png',
         texto,
         usuario: 'beta',
      };

      setPosts([post, ...posts]);
      setData('');
      setModalVisible(false);
   };

   const submitEditPost = (post: IPost): void => {
      const objIndex = posts.findIndex((obj) => obj.id === post.id);
      posts[objIndex].texto = postEditText;

      setPostEditText('');
      setModalEditVisible(false);
   };

   const submitDeletePost = (postId: string): void => {
      const objIndex = posts.findIndex((obj) => obj.id === postId);
      posts.splice(objIndex, 1);

      setModalDeleteVisible(false);
   };

   function handleSubmit(): void {
      dispatch(AuthActions.signOutRequest());
   }

   function Item({ post }: { post: IPost }): ReactElement {
      return (
         <PostCard>
            <PostCardTitle>
               <PostCardAvatar
                  source={{
                     uri: post.foto,
                  }}
               />
            </PostCardTitle>
            <PostCardContent>
               <PostCardName>{post.nome}</PostCardName>
               <PostCardData>{new Date(post.data).toUTCString()}</PostCardData>
               <PostCardText>{post.texto}</PostCardText>
            </PostCardContent>
            {post.usuario === 'beta' && (
               <PostCardActions>
                  <Icon
                     name="circle-edit-outline"
                     color="#000"
                     size={22}
                     onPress={(): void => {
                        setModalEditVisible(true);
                        setPostEditText(post.texto);
                        setPostEdit(post);
                     }}
                  />
                  <Icon
                     name="delete-sweep-outline"
                     color="#000"
                     size={22}
                     onPress={(): void => {
                        setModalDeleteVisible(true);
                        setPostDelete(post.id);
                     }}
                  />
               </PostCardActions>
            )}
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
         {/* MODAL CRIA POST */}
         <Modal animationType="slide" transparent visible={modalVisible}>
            <ModalNewPost>
               <FormControl borderColor="#000">
                  <FormInput
                     multiline
                     autoCapitalize="none"
                     numberOfLines={0}
                     scrollEnabled
                     autoFocus
                     maxLength={280}
                     autoCorrect={false}
                     value={data}
                     onChangeText={setData}
                  />
               </FormControl>
               <CountCaracter>
                  {data.length}
                  /280
               </CountCaracter>
               <ActionButton
                  marginTop="10px"
                  onPress={(): void => {
                     submitNewPost(data);
                  }}
               >
                  <TextButton>Publicar</TextButton>
               </ActionButton>
               <ActionButton
                  marginTop="10px"
                  backgroundColor="#000"
                  onPress={(): void => {
                     setModalVisible(false);
                     setData('');
                  }}
               >
                  <TextButton>Cancelar</TextButton>
               </ActionButton>
            </ModalNewPost>
         </Modal>
         {/* MODAL EDITA POST */}
         <Modal animationType="slide" transparent visible={modalEditVisible}>
            <ModalNewPost>
               <FormControl borderColor="#000">
                  <FormInput
                     multiline
                     autoCapitalize="none"
                     numberOfLines={0}
                     scrollEnabled
                     autoFocus
                     autoCorrect={false}
                     value={postEditText}
                     onChangeText={setPostEditText}
                  />
               </FormControl>
               <ActionButton
                  marginTop="10px"
                  onPress={(): void => {
                     submitEditPost(postEdit || posts[0]);
                  }}
               >
                  <TextButton>Concluir</TextButton>
               </ActionButton>
               <ActionButton
                  marginTop="10px"
                  backgroundColor="#000"
                  onPress={(): void => {
                     setModalEditVisible(false);
                  }}
               >
                  <TextButton>Cancelar</TextButton>
               </ActionButton>
            </ModalNewPost>
         </Modal>
         {/* MODAL DELETA POST */}
         <Modal animationType="slide" transparent visible={modalDeleteVisible}>
            <ModalNewPost>
               <PostCardNameDelete>
                  Deseja realmente excluir?
               </PostCardNameDelete>
               <ActionButton
                  marginTop="10px"
                  onPress={(): void => {
                     submitDeletePost(postDelete);
                  }}
               >
                  <TextButton>Confirmar</TextButton>
               </ActionButton>
               <ActionButton
                  marginTop="10px"
                  backgroundColor="#000"
                  onPress={(): void => {
                     setModalDeleteVisible(false);
                  }}
               >
                  <TextButton>Cancelar</TextButton>
               </ActionButton>
            </ModalNewPost>
         </Modal>
         <Container>
            <PostList
               data={posts}
               renderItem={({ item }: { item: IPost }): ReactElement => (
                  <Item post={item} />
               )}
               keyExtractor={(item: IPost): string => item.id}
            />
            {!modalDeleteVisible && !modalVisible && !modalEditVisible && (
               <FabButton
                  onPress={(): void => {
                     setModalVisible(true);
                  }}
               >
                  <Icon color="#ffffff" name="plus-circle-outline" size={32} />
               </FabButton>
            )}
         </Container>
      </>
   );
};

export default Home;
