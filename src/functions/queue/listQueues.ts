import { Request, Response } from "express";


export default async function listQueues(req: Request, res: Response, tools: any) {
    const { queue_repository } = await tools.getRepositoryQueue();
    const queues = await queue_repository.findAll();
    return queues
}