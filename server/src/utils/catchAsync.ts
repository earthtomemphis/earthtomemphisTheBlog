import { NextFunction } from 'express';

export default (func) => {
	return (req: Request, res: Response, next: NextFunction) => {
		func(req, res, next).catch(next);
	};
};
