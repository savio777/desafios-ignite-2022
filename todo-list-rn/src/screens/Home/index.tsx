import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Logo from "../../assets/Logo.png";
import Input from "../../components/Input";
import ListEmptyNote from "../../components/ListEmptyNote";
import ModalNote from "../../components/ModalNote";
import Notes from "../../components/Note";
import useNoteStore, { INote } from "../../stores/note";
import colors from "../../utils/colors";
import {
  Container,
  Content,
  WrapperLogo,
  LogoImage,
  WrapperRow,
  TitleCounter,
  WrapperCounter,
  Counter,
  FloatButton,
} from "./styles";

const Home = () => {
  const { addNotes, changeStatusNote, notes, removeNote, deleteAllNotes } =
    useNoteStore();

  const [textNote, setTextNote] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [noteSelected, setNoteSelected] = useState<INote | undefined>();

  const counterCreated = notes.filter((notes) => !notes.done).length;
  const counterDone = notes.filter((notes) => notes.done).length;

  const handleAddNote = () => {
    if (!textNote) {
      Alert.alert("Aviso", "Texto da nota está vazio");

      return;
    }

    addNotes({ text: textNote, done: false, id: uuidv4() });

    setTextNote("");
  };

  const handleExludeNote = (id: string) => {
    removeNote(id);
  };

  const handleDoneNote = (id: string) => {
    changeStatusNote(id);
  };

  const handleSelectNote = (note: INote) => {
    setIsOpenModal(true);
    setNoteSelected(note);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setNoteSelected(undefined);
  };

  const handleExcludeNoteModal = () => {
    if (noteSelected) {
      handleExludeNote(noteSelected.id);
      setIsOpenModal(false);
    }
  };

  const handleChangeStatusNoteModal = () => {
    if (noteSelected) {
      changeStatusNote(noteSelected.id);
    }
  };

  return (
    <Container>
      <WrapperLogo>
        <LogoImage source={Logo} />
      </WrapperLogo>
      <Content>
        <Input
          placeholder="Adicione uma nova tarefa"
          onAdd={handleAddNote}
          value={textNote}
          onChangeText={setTextNote}
          onSubmitEditing={handleAddNote}
        />

        <WrapperRow>
          <WrapperCounter>
            <TitleCounter type="created">Criadas</TitleCounter>
            <Counter>{counterCreated}</Counter>
          </WrapperCounter>

          <WrapperCounter>
            <TitleCounter type="done">Concluídas</TitleCounter>
            <Counter>{counterDone}</Counter>
          </WrapperCounter>
        </WrapperRow>

        <FlatList
          keyExtractor={(item) => item.id}
          data={notes}
          renderItem={({ item }) => (
            <Notes
              {...item}
              onDone={() => handleDoneNote(item.id)}
              onExclude={() => handleExludeNote(item.id)}
              onPressText={() => handleSelectNote(item)}
            />
          )}
          ListEmptyComponent={() => <ListEmptyNote />}
          ListFooterComponent={() => <View />}
          ListFooterComponentStyle={{ height: 350 }}
        />
      </Content>

      <FloatButton onPress={deleteAllNotes}>
        <Icon name="trash-can-outline" size={22} color={colors.purple.dark} />
      </FloatButton>

      <ModalNote
        visible={isOpenModal}
        note={noteSelected}
        onExclude={handleExcludeNoteModal}
        onChangeStatus={handleChangeStatusNoteModal}
        onRequestClose={closeModal}
        transparent
      />
    </Container>
  );
};

export default Home;
