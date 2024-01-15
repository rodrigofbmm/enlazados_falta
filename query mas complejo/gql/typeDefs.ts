export const typeDefs=`#graphql
type Characters{
    id:ID!
    name:String!
    episode:[Episode!]!
}

type Episodes{
    id: ID!
    name: String!
    characters:[Character!]!
}

type Query{
    character(id:ID!): Character!
    charactersByIds(ids: [ID!]!): [Character!]!
}

`;
