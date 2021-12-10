import type { Driver } from 'neo4j-driver';

declare global {
  // eslint-disable-next-line
  var neo4j: {
    driver?: Driver;
  };
  // USED FOR DEVELOPING TYPES AUTOMATICALLY IN DEV
  var lastRan: Date;
}

export default global;
