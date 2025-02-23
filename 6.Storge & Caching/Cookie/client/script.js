console.log('script loadd');

const setPreferenceButton = document.getElementById('set-preference');
const preference = document.getElementById('preference-selector');
const recommendations = document.getElementById('recommendations');

const base_url = 'http://localhost:4000';
setPreferenceButton.addEventListener('click', () => {
  console.log(preference.value);

  document.cookie = `preference=${preference.value}; httpOnly:true`;
  console.log(document.cookie);
  fetch(base_url + '/setPreference');
});

function getRecommendations() {
  fetch(base_url + '/getRecommendation')
    .then((res) => res.json())
    .then((response) => {
      response.forEach((rec) => {
        const li = document.createElement('li');
        li.textContent = rec.name;
        recommendations.appendChild(li);
      });
    });
}
