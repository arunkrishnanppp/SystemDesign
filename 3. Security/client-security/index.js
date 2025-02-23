console.log('Js Loaded');
const input = document.getElementById('input');
const save = document.getElementById('save');
const get = document.getElementById('get');
const messageDiv = document.getElementById('message-div');

const data = 'Message that need to store';
const key = 'AesCtrParams';

// const encrypted = encrypt(algorithm, key, message);
console.log(CryptoJS);

function checkBrowserStorageUtilization() {
  console.log(navigator.storage);
  console.log(navigator.storage.estimate);

  navigator.storage.estimate().then((estimate) => {
    console.log(estimate.usage);
    console.log(estimate.quota);
    console.log(
      'Used : ' + (estimate.usage > 0 ? (estimate.usage / 1024 / 1024).toFixed(2) + ': MB' : 'O MB')
    );
    console.log(
      'Used : ' + (estimate.quota > 0 ? (estimate.quota / 1024 / 1024).toFixed(2) + ': MB' : 'O MB')
    );
  });
}
checkBrowserStorageUtilization();

save.addEventListener('click', (e) => {
  const inputVal = input.value;
  if (!inputVal) {
    window.alert('Enter something');
    return;
  }
  /*Encryption for security */
  const encryptedMessage = CryptoJS.AES.encrypt(inputVal, key);

  /* checksom for data integeryty */

  const checkSum = CryptoJS.SHA256(inputVal).toString();

  localStorage.setItem('message', encryptedMessage);
  localStorage.setItem('message-checksum', checkSum);

  window.alert('Message Stored' + encryptedMessage);
});

get.addEventListener('click', (e) => {
  const value = localStorage.getItem('message');
  console.log(value);
  const retrivedCheckSum = localStorage.getItem('message-checksum');

  if (value == null) return;
  const bytes = CryptoJS.AES.decrypt(value, key);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  //Check if checksom match
  console.log(decrypted);
  const newCheckSum = CryptoJS.SHA256(decrypted).toString();
  console.log(retrivedCheckSum);
  console.log(newCheckSum);
  if (newCheckSum === retrivedCheckSum) {
    const p = (document.createElement('p').innerText = decrypted);
    messageDiv.append(p);
  }
});
