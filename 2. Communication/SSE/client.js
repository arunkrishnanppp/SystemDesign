(function () {
  console.log('JS Loaded');
  const SSE_ENDPOINT = 'http://localhost:4000/sse';
  const makeSSECall = async () => {
    const res = await fetch(SSE_ENDPOINT);
    const response = await res.json();
    console.log(response);
  };

  // makeSSECall();

  const evtSource = new EventSource('http://localhost:4000/sse');
  evtSource.onmessage = (event) => {
    console.log('event received');
    const newElement = document.createElement('li');
    const eventList = document.getElementById('message-container');

    newElement.textContent = `message: ${event.data}`;
    eventList.appendChild(newElement);
  };
})();
