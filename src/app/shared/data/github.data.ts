export const GITHUB_USERNAME = 'jere792';
export const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`;

export interface GithubProfile {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

