// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var LastValidRequest: number = Date.now();

var cache: object;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {

  if (Date.now()-LastValidRequest > 1000000 || cache === undefined){
    LastValidRequest = Date.now();
    fetch('https://api.github.com/users/KJ002')
      .then(value => value.json())
      .then(data => cache = data);
  }

  res.status(200).json(cache)
}
