const express = require('express')
const app = express()
const fileHandler = require('fs');
app.use(express.json());

app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});