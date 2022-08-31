import connection from "../dbStrategy/postgres";

export async function postFirstMatch(){
  await connection.query (`
  INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, $2, $3, $4)`,
  [])
}