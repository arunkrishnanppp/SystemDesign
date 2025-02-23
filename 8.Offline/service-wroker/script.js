const container = document.getElementById('container');

for (let i = 1; i <= 13; i++) {
  const img = document.createElement('img');
  img.src = `public/img${i}.jpeg`;
  
  container.appendChild(img);
}
