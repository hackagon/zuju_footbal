import { Multer } from 'multer';

export declare namespace Express {
  export interface Request {
    token?: string;
    originalUrl: string;
    Multer: Multer;
  }
}
