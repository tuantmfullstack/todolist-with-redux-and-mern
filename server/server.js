import mongoose from 'mongoose';
import app from './app.js';

const port = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL.replace(
  '<password>',
  process.env.MONGODB_PW
);

console.log(process.env.NODE_ENV);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('DB connected!'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
