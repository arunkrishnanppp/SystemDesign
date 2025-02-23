console.log('Client js executing');
const divId = 'polled-data';
const div = document.getElementById(divId);
const getServerResource = () => {
  const url = 'http://localhost:3000/getResource';
  fetch(url)
    .then((resp) => resp.json())
    .then((response) => {
      div.innerHTML = JSON.stringify(response);
    });
};

const shortPolilingg = setInterval(() => {
  const response = getServerResource();
}, 1000);
