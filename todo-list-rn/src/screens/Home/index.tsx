import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

import Logo from "../../assets/Logo.png";
import Input from "../../components/Input";
import ListEmptyNote from "../../components/ListEmptyNote";
import Notes from "../../components/Note";
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

export type INote = {
  id: string;
  text: string;
  done: boolean;
};

const Home = () => {
  const [textNote, setTextNote] = useState("");
  const [listNotes, setListNotes] = useState<INote[]>([]);
  const [counterCreated, setCounterCreated] = useState(0);
  const [counterDone, setCounterDone] = useState(0);

  const handleAddNote = () => {
    setListNotes((prevValue) => [
      ...prevValue,
      { text: textNote, done: false, id: uuidv4() },
    ]);
    setTextNote("");
  };

  const handleExludeNote = (id: string) => {
    setListNotes((prevValue) => [
      ...prevValue.filter((notes) => notes.id !== id),
    ]);
  };

  const handleDoneNote = (id: string) => {
    const noteFindIndex = listNotes.findIndex((notes) => notes.id === id);

    const newListNotes = listNotes;

    newListNotes[noteFindIndex].done = !newListNotes[noteFindIndex].done;

    setListNotes([...newListNotes]);
  };

  useEffect(() => {
    const counterNotes = () => {
      setCounterCreated(listNotes.filter((notes) => !notes.done).length);
      setCounterDone(listNotes.filter((notes) => notes.done).length);
    };

    counterNotes();
  }, [listNotes]);

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
          data={listNotes}
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
