import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Image,
    Alert,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Modal,
  } from "react-native";
  import React, { useState, useEffect, useLayoutEffect } from "react";
  import { Entypo, MaterialIcons } from "@expo/vector-icons";
  import EmojiSelector from "react-native-emoji-selector";
  import { useRoute, useNavigation } from "@react-navigation/native";
  import * as ImagePicker from "expo-image-picker";
  import { sendMessage, uploadFile, getMessages, getCurrentUser, markMessageAsRead } from "@/lib/appwrite";
  
  const FriendChat = () => {
    const [showEmojiSelector, setShowEmojiSelector] = useState(false);
    const [message, setMessage] = useState("");
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isMediaViewerVisible, setIsMediaViewerVisible] = useState(false);
    const [mediaToView, setMediaToView] = useState(null);
    const route = useRoute();
    const navigation = useNavigation();
    const { friendId, avatar, fullname } = route.params;
    const [currentUserId, setCurrentUserId] = useState("");
  
    useEffect(() => {
      const fetchCurrentUser = async () => {
        try {
          const user = await getCurrentUser();
          setCurrentUserId(user.$id);
        } catch (error) {
          Alert.alert("Error", "Failed to fetch user.");
        }
      };
  
      fetchCurrentUser();
    }, []);
  
    useEffect(() => {
      const fetchMessages = async () => {
        if (!currentUserId) return;
        setLoading(true);
        try {
          const messages = await getMessages(currentUserId, friendId);
          setMessages(messages);
          markMessagesAsRead(messages);
        } catch (error) {
          Alert.alert("Error", "Failed to load messages.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchMessages();
    }, [currentUserId, friendId]);
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: avatar }}
              style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{fullname}</Text>
          </View>
        ),
      });
    }, [navigation, avatar, fullname]);
  
    const markMessagesAsRead = async (messages) => {
      try {
        for (const msg of messages) {
          if (msg.toUserId === currentUserId && !msg.isRead) {
            await markMessageAsRead(msg.$id);
          }
        }
      } catch (error) {
        console.error("Failed to mark messages as read:", error);
      }
    };
  
    const handleEmojiPress = () => {
      setShowEmojiSelector(!showEmojiSelector);
    };
  
    const handleSend = async () => {
      if (message.trim() === "" && !selectedMedia) return;
  
      try {
        if (selectedMedia) {
          const fileUrl = await uploadFile(selectedMedia, selectedMedia.type.split('/')[0]);
          await sendMessage(currentUserId, friendId, fileUrl, selectedMedia.type.split('/')[0]);
        } else {
          await sendMessage(currentUserId, friendId, message, "text");
        }
  
        setMessage("");
        setSelectedMedia(null); // Clear selected media after sending
  
        // Fetch updated messages
        const messages = await getMessages(currentUserId, friendId);
        setMessages(messages);
        markMessagesAsRead(messages);
      } catch (error) {
        Alert.alert("Error", "Failed to send message.");
      }
    };
  
    const handleMediaPicker = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setSelectedMedia(result.assets[0]);
      }
    };
  
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    };
  
    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      const options = { hour: "numeric", minute: "numeric", hour12: true };
      return date.toLocaleTimeString(undefined, options);
    };
  
    const renderMessages = () => {
      let lastMessageDate = null;
  
      return messages.map((msg) => {
        const isCurrentUser = msg.fromUserId === currentUserId;
        const messageDate = new Date(msg.timestamp).toDateString();
        const showDate = !lastMessageDate || lastMessageDate !== messageDate;
        lastMessageDate = messageDate;
  
        return (
          <View key={msg.$id} style={{ paddingHorizontal: 10 }}>
            {showDate && (
              <Text
                style={{
                  alignSelf: "center",
                  color: "grey",
                  marginVertical: 10,
                }}
              >
                {formatDate(msg.timestamp)}
              </Text>
            )}
            <View
              style={[
                styles.messageContainer,
                isCurrentUser
                  ? styles.currentUserMessage
                  : styles.friendMessage,
              ]}
            >
              <Text style={styles.messageTime}>{formatTime(msg.timestamp)}</Text>
              {msg.messageType === "text" ? (
                <Text style={styles.messageText}>{msg.content}</Text>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setMediaToView(msg.content);
                    setIsMediaViewerVisible(true);
                  }}
                >
                  {msg.messageType === "image" ? (
                    <Image source={{ uri: msg.content }} style={styles.messageImage} />
                  ) : (
                    <Text style={styles.messageText}>Video</Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
          </View>
        );
      });
    };
  
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#ff2c5f"
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            />
          ) : (
            renderMessages()
          )}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderTopWidth: 1,
            borderTopColor: "grey",
            marginBottom: showEmojiSelector ? 0 : 25,
          }}
        >
          <Entypo
            name="emoji-happy"
            onPress={handleEmojiPress}
            style={{ marginRight: 5 }}
            size={24}
            color="grey"
          />
          <TextInput
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={{
              flex: 1,
              height: 40,
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
            placeholder="Type your message..."
          />
          <MaterialIcons
            name="photo-camera"
            size={24}
            color="grey"
            onPress={handleMediaPicker}
          />
          <Pressable
            style={{
              backgroundColor: "#ff2c5f",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 20,
            }}
            onPress={handleSend}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
          </Pressable>
        </View>
        {selectedMedia && (
          <View style={styles.mediaPreviewContainer}>
            <Image
              source={{ uri: selectedMedia.uri }}
              style={styles.mediaPreview}
            />
            <Pressable
              style={styles.removeMediaButton}
              onPress={() => setSelectedMedia(null)}
            >
              <Text style={styles.removeMediaText}>X</Text>
            </Pressable>
          </View>
        )}
        {showEmojiSelector && (
          <EmojiSelector
            onEmojiSelected={(emoji) => {
              setMessage((prevMessage) => prevMessage + emoji);
            }}
            style={{ height: 250 }}
          />
        )}
        <Modal
          visible={isMediaViewerVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.mediaViewer}>
            <TouchableOpacity
              style={styles.closeMediaViewerButton}
              onPress={() => setIsMediaViewerVisible(false)}
            >
              <Text style={styles.closeMediaViewerText}>Close</Text>
            </TouchableOpacity>
            {mediaToView && (
              <Image source={{ uri: mediaToView }} style={styles.fullScreenMedia} />
            )}
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    messageContainer: {
      marginVertical: 5,
      padding: 10,
      borderRadius: 10,
      maxWidth: "70%",
    },
    currentUserMessage: {
      alignSelf: "flex-end",
      backgroundColor: "#DCF8C6",
    },
    friendMessage: {
      alignSelf: "flex-start",
      backgroundColor: "#E6E6E6",
    },
    messageText: {
      color: "black",
      fontSize: 16,
    },
    messageTime: {
      fontSize: 10,
      color: "grey",
      marginBottom: 5,
    },
    messageImage: {
      width: 200,
      height: 200,
      borderRadius: 10,
    },
    mediaPreviewContainer: {
      position: "absolute",
      bottom: 60,
      left: 10,
      right: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
    },
    mediaPreview: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    removeMediaButton: {
      backgroundColor: "red",
      borderRadius: 20,
      padding: 5,
    },
    removeMediaText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    mediaViewer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    closeMediaViewerButton: {
      position: "absolute",
      top: 50,
      right: 20,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 20,
    },
    closeMediaViewerText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
    },
    fullScreenMedia: {
      width: "100%",
      height: "80%",
      resizeMode: "contain",
    },
  });
  
  export default FriendChat;
  