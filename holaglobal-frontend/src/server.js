const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // İstemci uygulamanın kökeni
}));

// Diğer route ve middleware tanımları buraya gelebilir

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
