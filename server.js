<<<<
'EOF''EOF'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware// Middleware
app.use(express.json());
// Rutas// Rutas
app.get('/', (req, res) => {
res.json({ message: 'API E-Commerce funcionando' });
});});
app.listen(PORT, () => {
console.log(`Servidor corriendo en puerto ${PORT}`);
});});
EOF