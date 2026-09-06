import { GITHUB_USERNAME, GITHUB_API, type GithubProfile } from '@/data/github';

export async function getProfile(): Promise<GithubProfile> {
  const res = await fetch(GITHUB_API, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch GitHub profile');
  return res.json();
}

export function getContribUrl(): string {
  return `https://ghchart.rshah.org/58a6ff/${GITHUB_USERNAME}`;
}
