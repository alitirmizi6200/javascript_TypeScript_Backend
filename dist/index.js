import express from 'express';
require('dotenv').config();
const app = express();
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
app.get('/', (req, res) => { res.send({ "msg": "Chai" }); });
