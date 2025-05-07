const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('CV Generator API is live buddy');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
