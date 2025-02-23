const PID = 'chat-input-P1';
const pid2 = 'chat-input-P2';
const url = 'http://localhost:3000/message';

const P1HASH = new Map();
const P2HASH = new Map();

const sendMessage = async (ID) => {
  console.log('Sedn message called');
  const message = document.getElementById(`chat-input-${ID}`).value;

  console.log(message);
  const postBody = {
    message: message,
    sender: ID
  };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(postBody),
    method: 'POST', // Specifies the HTTP method
    headers: {
      'Content-Type': 'application/json' // Indicates the content type
    }
  });
  const messages = await response.json();
  // renderMessages('P1', messages);
};
const pollMessages = async () => {
  const response = await fetch(url, {
    method: 'GET'
  });
  const messages = await response.json();
  renderMessages('P1', messages, P1HASH);
  renderMessages('P2', messages, P2HASH);
};

setInterval(() => {
  pollMessages();
}, 1000);

const renderMessages = (ID, MESSAGES, MAP) => {
  const chatDiv = document.getElementById(`chat-content-${ID}`);
  MESSAGES.forEach((message) => {
    if (!MAP.get(message.id)) {
      const text = document.createElement('h3');
      text.className = `chatMessage ${
        message.sender == ID ? 'chatMessage-left' : 'chatMessage-right'
      }`;
      text.textContent = message.message;
      chatDiv.appendChild(text);
      MAP.set(message.id, message);
    }
  });
};
