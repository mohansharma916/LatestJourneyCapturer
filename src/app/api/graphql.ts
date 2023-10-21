// /pages/api/graphql.ts
import { schema } from "../../../graphql/schema";
import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { context } from "../../../graphql/context";

const yoga = createYoga({ schema, context });
const server = createServer(yoga);
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
export default server;
