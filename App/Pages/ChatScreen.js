import { StyleSheet, SafeAreaView } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { useRoute } from "@react-navigation/native";
import GlobalApi from "../Services/GlobalApi";

export default function ChatScreen() {
  const param = useRoute().params;
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedChatFace, setSelectedChatFace] = useState([]);

  useEffect(() => {
    setSelectedChatFace(param.selectedFace);
    setMessages([
      {
        _id: 1,
        text: "Hello, I am " + selectedChatFace.name,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: selectedChatFace.image,
        },
      },
    ]);
  }, [selectedChatFace]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    setLoading(true);
    if (messages[0].text) {
      getHuggingFaceResponse(messages[0].text);
    }
  }, []);

  const getHuggingFaceResponse = async (msg) => {
    try {
      const response = await GlobalApi.getHuggingFaceResponse(msg);

      if (response.error) {
        console.error("Hugging Face API error:", response.error);
        setLoading(false);
        const chatAPIResp = {
          _id: Math.random() * (9999999 - 1),
          text: "Sorry 🙏  An error occurred 😢",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: selectedChatFace.image,
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, chatAPIResp)
        );
        return;
      }

      if (response.generated_text) {
        const chatAPIResp = {
          _id: Math.random() * (9999999 - 1),
          text: response.generated_text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: selectedChatFace.image,
          },
        };
        setLoading(false);
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, chatAPIResp)
        );
      } else if (response[0] && response[0].generated_text) {
        const chatAPIResp = {
          _id: Math.random() * (9999999 - 1),
          text: response[0].generated_text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: selectedChatFace.image,
          },
        };
        setLoading(false);
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, chatAPIResp)
        );
      } else {
        setLoading(false);
        const chatAPIResp = {
          _id: Math.random() * (9999999 - 1),
          text: "Sorry 🙏  No data found 😢",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: selectedChatFace.image,
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, chatAPIResp)
        );
      }
    } catch (error) {
      console.error("Error fetching Hugging Face response:", error);
      setLoading(false);
      const chatAPIResp = {
        _id: Math.random() * (9999999 - 1),
        text: "Sorry 🙏  An error occurred 😢",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: selectedChatFace.image,
        },
      };
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, chatAPIResp)
      );
    }
  };

  return (
    <SafeAreaView style={styles.chatView}>
      <GiftedChat
        messages={messages}
        isTyping={loading}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatView: {
    flex: 1,
    marginTop: 42,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});