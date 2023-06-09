import { View, Text, FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatListItem from "../component/ChatListItem";

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreen;
