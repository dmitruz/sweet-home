
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const contactData = { name, email, message, date: new Date().toISOString() };

    const filePath = path.join(__dirname, 'contacts.json');

    
    fs.readFile(filePath, 'utf8', (err, data) => {
        const contacts = data ? JSON.parse(data) : [];
        contacts.push(contactData);

        fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                console.error('Error saving contact data:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.status(200).json({ message: 'Contact saved successfully.' });
        });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
