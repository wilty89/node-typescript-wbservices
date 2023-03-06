import { Request, Response } from "express";
import { pool } from "../database/db";
import { QueryResult } from "pg";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM links ORDER BY id ASC"
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  console.log(id);
  const response: QueryResult = await pool.query(
    "SELECT * FROM links WHERE id = $1",
    [id]
  );
  return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const response = await pool.query(
    "INSERT INTO links (name, email) VALUES ($1, $2)",
    [name, email]
  );
  res.json({
    message: "User Added successfully",
    body: {
      user: { name, email },
    },
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const response = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id]
  );
  res.json("User Updated Successfully");
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM links where id = $1", [id]);
  res.json(`User ${id} deleted Successfully`);
};

export const fetch = async (req: any, res: any) => {
  try {
    console.log(req.params);
    return res.status(200).send("success");
  } catch (err) {
    console.log(err);
  }
};
