import { app } from './index';

const port = 3001;

app.listen(port, () => {
  console.log(`rodando server em http://localhost:${port}`)
});