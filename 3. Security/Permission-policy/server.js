const express = require('express');

const app = express();
app.listen(5001, () => console.log('Server is up on 5001'));

app.use((req, res, next) => {
  // res.setHeader('Permissions-Policy', 'geolocation=()'); // Ensure "Permis
  // res.setHeader('Permissions-Policy', 'geolocation=*'); // Ensure "Permis
  // res.setHeader('Permissions-Policy', 'geolocation=*'); // Ensure "Permis
  // res.setHeader('Permissions-Policy', 'geolocation=self'); // Ensure "Permis
  // res.setHeader('Permissions-Policy', 'geolocation=(self)'); // Ensure "Permis
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(self "http://127.0.0.1:5500" "https://pp-demo-trusted-site.glitch.me"https://pp-demo-trusted-site.glitch.me)'
  );

  next();
});
app.get('/', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    
    </head>
    
    <body>
    <h1>Permission Policy POC</h1>

    <iframe src="http://127.0.0.1:5500/SystemDesign/3.%20Security/Permission-policy/iframe-page.html" allow="geolocation"></iframe>
<iframe src="https://pp-demo-trusted-site.glitch.me" allow="geolocation"></iframe>
    <script>
         console.log("Script loaded")
      
        console.log(     navigator.geolocation)
        const Geolocation=navigator.geolocation

        Geolocation.getCurrentPosition(function(obj){
        
        console.log(obj)
        }, function(err){
        console.log(err);
        window.alert('Access Denied');
        })
  
    </script>
    </body>
    </html>
    `
  );
});
