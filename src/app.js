const express    = require('express');
const dotenv     = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API corriendo correctamente ✅' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});