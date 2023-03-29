import { NextFunction, Request, Response } from 'express';

export async function moviesTestController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // таким образом достаем db в любом месте из контекста
    const { db } = req.context;

    res.json(await db.movies.findMany(req.body));
  } catch (err) {
    next(err);
  }
}
