import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

app.use(morgan('dev'))

// const corsOptions = {
//   origin: 'https://fudan.today',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

server.applyMiddleware({ app })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
)
