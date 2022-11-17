import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import 'react-native-get-random-values';

import Home from "./src/screens/Home";
import colors from "./src/utils/colors";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[700] }}>
      <Home />
      <StatusBar style="light" backgroundColor={colors.gray[700]} />
    </View>
  );
}
