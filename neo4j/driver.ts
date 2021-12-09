import neo4j, { type Driver } from 'neo4j-driver';

const { NEO4J_USER, NEO4J_PASSWORD, NEO4J_URI } = process.env;

let driver: Driver;

if (!global.neo4j?.driver) {
  global.neo4j = {
    driver: neo4j.driver(
      NEO4J_URI as string,
      neo4j.auth.basic(NEO4J_USER as string, NEO4J_PASSWORD as string),
      {
        disableLosslessIntegers: true,
      }
    ),
  }
  driver = global.neo4j.driver as Driver;
} else {
  driver = global.neo4j.driver as Driver;
}

  export default driver;
