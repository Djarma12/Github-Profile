export async function getGithubProfile(userName: string) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();
  return data;
}

export async function getGithubRepos(userName: string) {
  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const data = await res.json();
  return data;
}
