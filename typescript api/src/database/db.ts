import { Pool, Client } from "pg"

export const pool = new Pool({
    
    host: process.env.DB_HOST|| 'localhost',
    user: process.env.DB_USER ||'postgres',
    database: process.env.DB_NAME||'postgres',
    password: process.env.DB_PASSWORD || 'cono1234',
    port: parseInt(process.env.DB_PORT || "5433"),
    
    
  });
  

 export const connectToDB = async () => {
    try {
      await pool.connect();
    } catch (err) {
      console.log(err);
    }
  };
  connectToDB();

/*
  import fs from "fs";
  async function resetDatabase(): Promise<void> {
    const client = new Client(process.env.DB_NAME);
    try {
      console.log("before connect");
      await client.connect();
      console.log("after connect");
      const res = await client.query(fs.readFileSync("../../notas.txt"), [
        "Connection to postgres successful!",
      ]);
      console.log("connected", res.rows[0].connected);
    } catch (err) {
      console.error(err);
    }
    await client.end();
  }
  
  resetDatabase()
    .then((a) => console.log("ok", a))
    .catch((a) => console.log("no", a));
    */