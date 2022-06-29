import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';

const PORT = 3000;

const app = express();
const __dirname = path.resolve();
var assetsPath = path.join(__dirname, './build');
app.use(express.static(assetsPath));


app.listen(PORT, () => {
	console.log('Server is starting on Port 3001')
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', '/index.html'));
})