const express = require('express'); // imports express

const app = express();
const PORT = 3000; //  custom port 

app.get('/', (req, res) => { // get endpoint "http://localhost:3000/" -> prints Hello World msg
    res.json({ message: 'Hello World' });
});

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.json({ message: `Hello ${name}` });
});

app.listen(PORT, () => console.log(`App is running on PORT:${PORT}`))
