import {Router} from 'express';
import {graphqlHTTP} from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools';
import playground from 'graphql-playground-middleware-express';
import glue from 'schemaglue';
import {applyMiddleware} from 'graphql-middleware';

const router = Router(); // eslint-disable-line new-cap

const {schema: typeDefs, resolver: resolvers} = glue('app/graphql');

const executableSchema = applyMiddleware(makeExecutableSchema({typeDefs, resolvers}));

const graphqlHandler = async () => {
  return {
    schema: executableSchema
  };
};

router.post('/', graphqlHTTP(graphqlHandler));

router.get('/', playground({endpoint: '/graphql'}));

export default router;
