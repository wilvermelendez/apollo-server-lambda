import { journey } from "./journey";
import { worker } from "./worker";

console.log("journey.resolvers.queries");
const resolvers = {
  Query: {
    ...worker.resolvers.queries,
    ...journey.resolvers.queries
  }
};

export default resolvers;
