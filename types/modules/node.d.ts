import type { Driver } from "neo4j-driver";

declare global {
  // eslint-disable-next-line
  var neo4j: {
    driver?: Driver;
  };
}

export default global;
