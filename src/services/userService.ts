import { Octokit } from "octokit";
import * as userRepository from "../repositories/userRepository"

export async function checkIfUserExists(firstUser: string, secondUser: string) {
  const octokit = new Octokit({});
  const userOne = await octokit.request(`GET https://api.github.com/users/${firstUser}/repos`, {});
  const userTwo = await octokit.request(`GET https://api.github.com/users/${secondUser}/repos`, {});

  if (userOne.status !== 200) {
    throw { code: 'NotFound', message: 'Primeiro usuário não existe' };
  };

  if (userTwo.status !== 200) {
    throw { code: 'NotFound', message: 'Segundo usuário não existe' };
  };

  return { userOne, userTwo };
};

export async function checkStarCount(firstUser: string, secondUser: string) {
  const octokit = new Octokit({});
  const userOne = await octokit.request(`GET https://api.github.com/users/${firstUser}/repos`, {});
  const userTwo = await octokit.request(`GET https://api.github.com/users/${secondUser}/repos`, {});
  let sumStarsUserOne = 0;
  let sumStarsUserTwo = 0;

  for (let i = 0; i < userOne.data; i++) {
    sumStarsUserOne += userOne.data[i].stargazers_count
  };

  for (let i = 0; i < userTwo.data; i++) {
    sumStarsUserTwo += userTwo.data[i].stargazers_count
  };

  if (sumStarsUserOne > sumStarsUserTwo) {
    
    return {
      winner: firstUser,
      loser: secondUser,
      draw: false
    };
  } else if (sumStarsUserTwo > sumStarsUserOne) {
    return {
      winner: secondUser,
      loser: firstUser,
      draw: false
    };
  } else if (sumStarsUserOne === sumStarsUserTwo) {
    return {
      winner: null,
      loser: null,
      draw: true
    };
  }
};