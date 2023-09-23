import express from 'express';
import cors from 'cors';
import path from  'path';
const __dirname = path.resolve();

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/profile', (req, res) => {
  res.send("Hello this is profile");
})


app.get('/weather/:cityName', (req, res) => {
let userInput = {
  ramgarh:{
    temp:28 ,
    humidity :75,
  },
  ranchi:{
    temp:-46 ,
    humidity :-9,
  }
}
 let userInputCityName = req.params.cityName.toLowerCase();
let wetherDatatoSend = userInput[userInputCityName]
 if(wetherDatatoSend){
  res.send(wetherDatatoSend);
 } else {
  res.status(404).send("message: No Data Found")
 }

})

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
