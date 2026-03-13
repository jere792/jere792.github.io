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

// Mapeo de tipo de evento → label legible + icono
export const EVENT_MAP: Record<string, { label: string; icon: string }> = {
  PushEvent:                  { label: 'Push',           icon: 'pi pi-upload'       },
  CreateEvent:                { label: 'Creó rama/repo', icon: 'pi pi-plus-circle'  },
  DeleteEvent:                { label: 'Eliminó',        icon: 'pi pi-trash'        },
  PullRequestEvent:           { label: 'Pull Request',   icon: 'pi pi-code'         },
  IssuesEvent:                { label: 'Issue',          icon: 'pi pi-exclamation-circle' },
  WatchEvent:                 { label: 'Star',           icon: 'pi pi-star'         },
  ForkEvent:                  { label: 'Fork',           icon: 'pi pi-share-alt'    },
  IssueCommentEvent:          { label: 'Comentario',     icon: 'pi pi-comment'      },
  PullRequestReviewEvent:     { label: 'PR Review',      icon: 'pi pi-eye'          },
};