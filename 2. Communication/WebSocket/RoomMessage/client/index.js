const joinRoomButton = document.getElementById('room-button');
const sendMessageButton = document.getElementById('send-button');

const messageInput = document.getElementById('message-input');
const roomInput = document.getElementById('room-input');

const messageContainer = document.getElementById('message-container');
const socket = io('http://localhost:3000');
const socketUser = io('http://localhost:3000/user', {
  auth: {
    // token: 'Test'
  }
});

joinRoomButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(roomInput.value);
  /*

  Joining Room */
  // socket.emit('join-room', roomInput.value);

  /* We will be able to pass call back function to emit functiona nd server will be able to invoke the call backs */
  socket.emit('join-room', roomInput.value, () => {
    displayMessage(`Joined ${roomInput.value} room`);
  });
});

sendMessageButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message == '') return;

  displayMessage(message);
  messageInput.value = '';
  // socket.emit('chat message', message);
  // socket.emit('chat message', message, roomInput.value);
  try {
    // const response = await socket.timeout(5000).emitWithAck('chat message with ack', message, roomInput.value);

    const response = await socket.emitWithAck('chat message with ack', message, roomInput.value);
    console.log(response);
    window.alert('Message send successfully');
  } catch (err) {
    console.log('server didnt acknowlgde this ', err);
    window.alert('Message send timed-out');
  }
});

const displayMessage = (message) => {
  const div = document.createElement('div');
  div.textContent = message;
  messageContainer.appendChild(div);
};

//Acknowledgments , we can pass callback to emit and server wil be able to call this call backs
socket.on('connect', (args) => {
  // window.alert(`You are connected with id ${socket.id}`);
  displayMessage(`You are connected with id ${socket.id} in global namespace`);
});

socketUser.on('connect', (args) => {
  // window.alert(`You are connected with id ${socket.id}`);
  displayMessage(`You are connected with id ${socketUser.id} in socketUser namespace`);
});
socketUser.on('connect_error', (err) => {
  displayMessage(err);
});
socket.on('receive-message', (message) => {
  displayMessage(message);
});

document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  console.log('Key donwn', e);
  if (e.key == 'd') {
    console.log('disconnect');
    socket.disconnect();
  }
  if (e.key == 'c') {
    console.log('connect');
    socket.connect();
  }
});

let count = 1;
setInterval(() => {
  socket.emit('ping', count++);
}, 1000);
