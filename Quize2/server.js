const express = require('express');
const cors = require('cors');
const {Teams} =require('./db')
const app = express();


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

app.use()



const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);



})

app.get('/', (req, res) => {
  console.log("")
});
  