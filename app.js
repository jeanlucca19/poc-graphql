import { createServer } from 'http'
import { createSchema, createYoga } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { resolver } from './resolver.js'

const typeDefs = importSchema('schema.graphql')

createServer(
  createYoga({
    schema: createSchema({
      typeDefs: typeDefs,
      resolvers: resolver,
    })
  })
).listen(4000, () => {
  console.info('GraphQL Yoga is listening on http://localhost:4000/graphql')
})