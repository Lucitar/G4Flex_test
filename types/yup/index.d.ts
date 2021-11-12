import { ValidationError } from 'yup'

declare module 'yup' {
  interface ValidationError {
    statusCode?: number
  }
}
