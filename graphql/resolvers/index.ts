import { addTask } from "./mutations/add-task";
import { sayHello } from "./mutations/say-hello";
import { updateTask } from "./mutations/update-task-mutation";
import { getAllTasks } from "./queries/get-all-tasks";
import { getDoneTasksLists } from "./queries/get-done-tasks-list";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
    getDoneTasksLists,
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask,
  },
};
