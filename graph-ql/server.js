const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./model/connection.js");
const userQuery = require("./userQuery/userQuery.js");
const userMutations = require("./userMutation/userMutation.js");
const schema = require("./schema/schema.js");
const cors= require("cors")
app.use(cors())
connectDB();
const resolvers = {
  ...userQuery,
  ...userMutations,
};
app.use(
  "/graphql",
  graphqlHTTP({ schema, rootValue: resolvers, graphiql: true })
);
app.listen(3001, () => {
  console.log("server listening on port 3001");
});
