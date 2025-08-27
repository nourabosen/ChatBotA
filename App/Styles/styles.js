import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  parentView: {
    paddingTop: 90,
    alignItems: "center",
  },
  image: {
    marginTop: 20,
    width: 150,
    height: 150,
  },
  flatlistImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  chatbots: {
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    height: 95,
    padding: 10,
    justifyContent: "center",
    borderRadius: 15,
  },
  hazyStyle: {
    marginTop: 5,
    fontSize: 17,
    color: "#B0B0B0",
  },
  buttonText: {
    fontSize: 19,
    color: "#fff",
  },
});

export const chatScreenStyles = StyleSheet.create({
  chatView: {
    flex: 1,
    marginTop: 42,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});