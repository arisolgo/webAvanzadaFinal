const express = require('express');
const app = express();

app.use(express.static('./dist/parada'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/parada/'}
);
});

app.listen(process.env.PORT || 8080);