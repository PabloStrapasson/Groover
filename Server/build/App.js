const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = 5000;
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
router.get('/search', (req, res) => {
  res.send('search page');
});
app.listen(port, () => {
  console.log(`Rodando servidor na porta ${port}`);
});
app.set('view engine', 'ejs');
app.use('/', router);
app.use(express.static(path.join(__dirname, '/public')));