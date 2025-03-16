const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/scripts', (req, res) => {
    const scripts = [
        { name: 'Script 1', description: 'Description for script 1', price: 10 },
        { name: 'Script 2', description: 'Description for script 2', price: 20 },
        { name: 'Script 3', description: 'Description for script 3', price: 30 },
    ];
    res.json({ scripts });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});