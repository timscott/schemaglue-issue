import express from 'express';
import bodyParser from 'body-parser';
import graphqlRouter, {graphqlPath} from './graphqlRouter';

const port = 6677;

const app = express();

app.use(bodyParser.json());

app.use(graphqlPath, graphqlRouter);

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}!`);
});
