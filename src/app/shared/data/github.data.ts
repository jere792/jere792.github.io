export const GITHUB_USERNAME = 'jere792';
export const GITHUB_API      = `https://api.github.com/users/${GITHUB_USERNAME}`;

export interface GithubProfile {
  avatar_url:  string;
  public_repos: number;
  followers:   number;
  following:   number;
}

export interface GithubRepo {
  id:               number;
  name:             string;
  description:      string | null;
  html_url:         string;
  stargazers_count: number;
  forks_count:      number;
  language:         string | null;
  updated_at:       string;
  fork:             boolean;
}

export interface GithubEvent {
  id:         string;
  type:       string;
  created_at: string;
  repo: {
    name: string;
    url:  string;
  };
  payload: {
    commits?: { message: string }[];
    action?:  string;
    ref?:     string;
  };
}

