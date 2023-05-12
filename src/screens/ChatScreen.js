import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import bg from "../../assets/images/BG.png";
import Message from "../component/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../component/InputBox";

const ChatScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
    >
      {/* <ImageBackground source={bg} style={styles.bg}> */}
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />
      <InputBox />
      {/* </ImageBackground> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 2,
  },
});

export default ChatScreen;
