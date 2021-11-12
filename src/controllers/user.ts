import { Request, Response } from 'express'
import tools from '@/controllers/tools'
import functions from '@/functions/user'
import { IResponse, ResponseStatus } from '@/utils/service'
import { ValidationError } from 'yup'

class User {
  async createUser(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const result = await functions.createUser(req.body, tools)
      return res.json({
        status: ResponseStatus.OK,
        data: result,
      })
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors,
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
    }
  }

  async listUsers(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const users = await functions.listUsers(req, res, tools)
      return res.json({
        status: ResponseStatus.OK,
        data: users,
      })
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors,
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
    }
  }

  async listOne(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    // uservalidator.validateUserData(req, res);
    try {
      const users = await functions.listOne(req, res, tools)
      return res.json({
        status: ResponseStatus.OK,
        data: users,
      })
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors,
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
    }
  }

  async updateUser(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    // uservalidator.validateUserData(req, res);
    try {
      const login = await functions.updateUser(req, res, tools)
      return res.json({
        status: ResponseStatus.OK,
        data: login,
        message: `Dados do login ${login} alterados.`,
      })
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors,
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
    }
  }

  async deleteUser(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    // uservalidator.validateUserData(req, res);
    try {
      const login = await functions.deleteUser(req, res, tools)
      return res.json({
        status: ResponseStatus.OK,
        data: login,
        message: `Dados do login ${login} deletados.`,
      })
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors,
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
    }
  }
}
const user = new User()

export default user
