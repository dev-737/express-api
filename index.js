const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(logger);

const userRouter = require('./routes/users');
app.use('/users', userRouter);


app.listen(PORT, () => console.log('Server running on port http://localhost:' + PORT));
