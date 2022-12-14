import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import * as raygun from 'raygun';
import _ from 'lodash';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private raygunClient: raygun.Client;

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      exception: _.isFunction(exception.getResponse) ? exception.getResponse() : null,
    });
  }
}
