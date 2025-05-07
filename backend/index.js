const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('CV Generator API is live');
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port Server is running on http://localhost:${PORT}`));
