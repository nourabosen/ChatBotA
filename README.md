# 🤖 ChatbotA - A Basic AI Chatbot App

A beautiful and interactive mobile application built with React Native that allows users to chat with different AI personalities. The app integrates with the Hugging Face API to provide intelligent conversational responses.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)

## ✨ Features
- **Multiple AI Personas**: Choose from a variety of unique chat buddies, each with their own name and style.
- **Real-time Chat Interface**: Smooth and intuitive chat experience powered by `react-native-gifted-chat`.
- **AI-Powered Responses**: Fetches intelligent responses from the Hugging Face `facebook/blenderbot-400M-distill` model.
- **Elegant UI**: Clean, modern design with colour-coordinated themes for each chatbot.
- **Error Handling**: Robust error handling with user-friendly messages and automatic retries for API rate limits.

## 📸 App Preview
<video src="assets/Demo.mp4" controls width="600"></video>

## 🛠️ Tech Stack

- **Framework**: React Native (Expo)
- **Navigation**: React Navigation (Native Stack)
- **Chat UI**: `react-native-gifted-chat`
- **API**: Hugging Face Inference API
- **HTTP Client**: Native `fetch`

## 📋 Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A mobile device with the [Expo Go](https://expo.dev/client) app or an Android/iOS simulator

## 🚀 Installation & Setup
1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd your-repo-name
    ```
2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure Hugging Face API Key**
    - Get your free API key from [Hugging Face](https://huggingface.co/docs/api-inference/quicktour).
    - Open `Services/GlobalApi.js`.
    - Replace `'Place Your Key Here'` with your actual API key:
    ```javascript
    const HUGGINGFACE_API_KEY = 'your-huggingface-api-key-here';
    ```
4.  **Start the development server**
    ```bash
    npx expo start
    # or
    npm start
    ```
5.  **Run the app**
    - Scan the QR code with the Expo Go app (Android) or your camera (iOS).
    - Alternatively, press `a` for Android or `i` for iOS to run on a simulator.

## 📁 Project Structure
```
src/
├── App.js                          # Main application component
├── App/
│   ├── Navigation/
│   │   └── HomeScreenNavigation.js # Stack navigator configuration
│   ├── Pages/
│   │   ├── HomeScreen.js           # Home screen with bot selection
│   │   └── ChatScreen.js           # Main chat interface
│   └── Services/
│       ├── GlobalApi.js            # Hugging Face API service
│       └── ChatFaceData.js         # Data for chat bot personas
├── styles.js                       # Centralized styling
└── index.js                        # App entry point (Expo)
```

## ⚙️ Configuration
### Chat Personas
To add or modify the available chatbots, edit the `ChatFaceData` array in `Services/ChatFaceData.js`:
```javascript
{
  id: 6, // Unique ID
  name: "YourBotName", // Display name
  image: "https://...", // Avatar image URL
  primary: "#HEXCODE", // Primary color theme
}
```

### AI Model
The app currently uses the `facebook/blenderbot-400M-distill` model. To change this, update the `MODEL_ID` constant in `Services/GlobalApi.js`:
```javascript
const MODEL_ID = 'another-huggingface-model-id';
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Chat avatars provided by [Cloudinary](https://cloudinary.com/).
- AI model powered by [Hugging Face](https://huggingface.co/).
- UI built with [React Native Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat).

Note: This project builds upon the work of the original chatbot creator, and I gratefully acknowledge their contribution.
---

**Happy Chatting!** 🎉
