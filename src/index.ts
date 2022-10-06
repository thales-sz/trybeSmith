import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server on: ${PORT}`,
));

export default server;
