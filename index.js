const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
// app.use(logger);

const userRouter = require('./routes/users');
app.use('/users', userRouter);


app.listen(PORT, () => console.log('Server running on port http://localhost:' + PORT));
