import { app } from './index';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://gustavo:claudio10@cluster0.jrc9o.mongodb.net/?retryWrites=true&w=majority')
  .then(()=> {
    console.log('Connected to database.')
    app.emit('Pronto');
  })
  .catch(e => console.log(e))

const port = 3001;

app.on('Pronto', () => {
  app.listen(port, () => {
    console.log(`rodando server em http://localhost:${port}`)
  });
});