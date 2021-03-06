import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import helmet from 'helmet'

import { resolvers, typeDefs } from 'schema'
import { Log } from 'utils/Logger'

const app = express()

// security
app.use(helmet())

// graphql middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: any }) => ({
    req,
  }),
})
server.applyMiddleware({ app })

const port = parseInt(process.env.PORT) || 3001
const host = process.env.HOST || 'localhost'

app.listen(port, host, (err: any) => {
  if (err) {
    Log.error(err)
  }
  Log.info('Listening on ' + port)
})
