import { gql } from "apollo-server-lambda";
import { journey } from "./journey";
import { worker } from "./worker";

const typeDefs = gql`
  ${worker.types}
  ${journey.types}
  
  type Query {
    ${worker.queries}
    ${journey.queries}
  }
`;

export default typeDefs;
