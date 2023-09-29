const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Todo{
    content:String,
    completed:Boolean,
    _id:ID
}

type Query{
    getTodo:[Todo!]!
}
type Mutation{
    createTodo(content:String!):Todo!
    toggleTodo(id:ID!,completed:Boolean!):Todo!
    deleteTodo(id:ID!):Todo!
}
`);
module.exports = schema;
