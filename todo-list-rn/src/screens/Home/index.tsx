import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

import Logo from "../../assets/Logo.png";
import Input from "../../components/Input";
import ListEmptyNote from "../../components/ListEmptyNote";
import Notes from "../../components/Note";
import useNoteStore, { INote } from "../../stores/note";
import {
  Container,
  Content,
  WrapperLogo,
  LogoImage,
  WrapperRow,
  TitleCounter,
  WrapperCounter,
  Counter,
} from "./styles";

const Home = () => {
  const { addNotes, changeStatusNote, notes, removeNote } = useNoteStore();

  const [textNote, setTextNote] = useState("");

  const counterCreated = notes.filter((notes) => !notes.done).length;
  const counterDone = notes.filter((notes) => notes.done).length;

  const handleAddNote = () => {
    addNotes({ text: textNote, done: false, id: uuidv4() });

    setTextNote("");
  };

  const handleExludeNote = (id: string) => {
    removeNote(id);
  };

  const handleDoneNote = (id: string) => {
    changeStatusNote(id);
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
            />
          )}
          ListEmptyComponent={() => <ListEmptyNote />}
          ListFooterComponent={() => <View />}
          ListFooterComponentStyle={{ height: 350 }}
        />
      </Content>
    </Container>
  );
};

export default Home;
