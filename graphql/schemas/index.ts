import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Task {
    _id: ID!
    taskName: String!
    isDone: Boolean!
    priority: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    helloQuery: String
    getAllTasks: [Task!]!
    getDoneTasksLists: [Task!]!
  }

  type Mutation {
    sayHello(name: String!): String
    addTask(taskName: String!, priority: Int!): Task
    updateTask(
      taskId: ID!
      taskName: String
      isDone: Boolean
      priority: Int
    ): Task
  }
`;
