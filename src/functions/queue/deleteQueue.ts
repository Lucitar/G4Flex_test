import { Request, Response } from "express";


export default async function deleteQueue(req: Request, res: Response, tools: any) {
    const { queue_repository } = await tools.getRepositoryQueue();
    const { name } = req.body;
    
    return await queue_repository.deleteQueue(name);
}