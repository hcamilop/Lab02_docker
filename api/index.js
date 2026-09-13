const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Nombre no configurado';

app.get('/', (req, res) => {
  res.json({
    message: `Hola, mi nombre es ${MESSAGE}`,
    instance: process.env.HOSTNAME || 'unknown',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => console.log(`API escuchando en el puerto ${PORT}`));