import type { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).send({ message: 'API is running' });
  } else {
    res.status(404).send({ message: 'Endpoint Not Found' });
  }
}

export default handler;
