// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import Championship from "../../types/Championship";


function wait(timeout:number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Championship[]>
) {
    await wait(5000);
    let response: Championship[] = [];
    response.push({id: 1, year: 2020});
    response.push({id: 2, year: 2022});
    response.push({id: 3, year: 2023});
    res.status(200).json(response);
}
