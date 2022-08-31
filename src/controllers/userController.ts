import * as userServices from "../services/userService"
import { Request, Response } from "express"
import { Octokit } from "octokit";

export async function userController(req:Request, res: Response) {
  const octokit = new Octokit({ });
  const dados = await octokit.request("GET https://api.github.com/users/MatheusMachad00/repos", {});
  console.log(dados.data[0].stargazers_count)
res.send(dados);
}

