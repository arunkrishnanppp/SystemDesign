(function () {
  let WS;
  const message = document.getElementById('input-value');
  const openButton = document.getElementById('open-button');
  const closeButton = document.getElementById('close-button');
  const sendButton = document.getElementById('send-button');
  const messageDiv = document.getElementById('message-div');

  console.log(message);
  console.log(openButton);
  console.log(closeButton);
  console.log(sendButton);
  const showMessage = function (message, isError = false) {
    const div = document.createElement('div');
    div.className = `message-div ${isError ? 'error' : 'info'}`;
    div.textContent = message;
    messageDiv.appendChild(div);
  };

  openButton.addEventListener('click', () => {
    if (WS) {
      WS.close();
    }
    console.log('Open connection called');
    WS = new WebSocket('ws://localhost:4000?token=testtoken');
    WS.addEventListener('error', (err) => {
      console.log('Web socket error');
    });
    WS.addEventListener('open', () => {
      console.log('Web socket connection is opened');
    });
    WS.addEventListener('message', (message) => {
      console.log('message from server', message.data);
      showMessage(message.data);
    });
  });
  sendButton.addEventListener('click', () => {
    console.log('Sending message', message.value);
    console.log(WS);
    if (!WS || message.value == '') {
      return;
    }

    try {
      WS.send(message.value);
      showMessage(`Message send to server ${message.value}`);
    } catch (err) {
      showMessage(`Error while sending message send to server ${message.value}`, true);
    }
  });
  closeButton.addEventListener('click', () => {
    if (!WS) {
      return;
    }
    WS.close();
    WS = null;
  });
})();
