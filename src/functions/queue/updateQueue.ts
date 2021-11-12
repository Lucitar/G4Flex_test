import { Request, Response } from "express";


export default async function updateQueue(req: Request, res: Response, tools: any) {
    const { queue_repository } = await tools.getRepositoryQueue();
    const { name, timeout } = req.body;

    const queue = await queue_repository.updateData(name, timeout);
    return name
}