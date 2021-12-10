import { generate } from '@neo4j/graphql-ogm';
import path from 'path';

import ogm from 'graphql/ogm';

// Avoid running type generation unless its been over 30 seconds
let lastRan: Date;

if (!global.lastRan) {
  lastRan = new Date(Date.now() - 3000);
} else {
  lastRan = global.lastRan;
}

async function generateTypes() {
  // Only generate types when you make a schema change
  const secondsBetweenLastRun = Math.abs(
    (new Date().getTime() - lastRan?.getTime()) / 1000
  );
  if (secondsBetweenLastRun > 30 && process.env.NODE_ENV === 'development') {
    const outFile = path.resolve('types/neo4j.ts');

    await generate({
      ogm,
      outFile,
    });

    console.log('Types Generated');
    global.lastRan = new Date();
  }
}

export default generateTypes;
