import { Request, Response } from "express";


export default async function listOne(req: Request, res: Response, tools: any) {
    const { queue_repository } = await tools.getRepositoryQueue();
    const name = req.params.name;
        
    const queues = await queue_repository.findbyName(name);
    return queues
}