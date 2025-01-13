# ChatBot

ChatBot is a simple application featuring a chatbot interface and a Node.js backend that serves as a proxy for handling API requests. The app allows users to send messages and receive responses in real-time. From this repository you can learn how to make a Basic chatbot along with its backend to prevent CORS Issues. Before starting make sure you have your api key with you.

## File Structure

```
ChatBot
├── chatbot-backend
│   ├── node_modules
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
├── chatbot.html
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A terminal or command prompt.
- Git installed to clone the repository.

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AyushVerma947/ChatBot.git
   ```

2. **Navigate to the Backend Directory**
   ```bash
   cd ChatBot/chatbot-backend
   ```

3. **Install Dependencies**
   Run the following command to install all the required dependencies:
   ```bash
   npm install
   ```

4. **Replace API Key and Base URI**
   - Open the `server.js` file in a code editor.
   - Replace `YOUR_API_KEY` with your actual API key.
   - Replace the `baseURI` placeholder with the correct base URI provided by your API provider.

5. **Start the Backend Server**
   Launch the Node.js server:
   ```bash
   node server.js
   ```
   The backend server will start running at `http://localhost:3000`.

6. **Open the Frontend**
   - Open the `chatbot.html` file in a browser to interact with the chatbot.

## How It Works

- The backend server (`server.js`) acts as a proxy to handle API requests.
- Messages from the user are sent to the server, which processes the input and returns a response.
- The frontend (`chatbot.html`) displays the conversation in an interactive UI.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express

## Notes

- Ensure that the backend server is running before opening the frontend file.
- Update the `server.js` file with the appropriate API keys and base URI before starting the application.
- The `.gitignore` file in the backend directory can be used to exclude files like `node_modules` or sensitive information from being tracked in Git.


## License

This project is open-source and available under the MIT License.

---

Happy coding!

