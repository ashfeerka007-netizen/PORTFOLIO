import { useState, useEffect } from 'react';
import type { GitHubProfile, GitHubRepo } from '../types';
import { githubConfig } from '../config/portfolio.config';

interface GitHubData {
  profile: GitHubProfile | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  languages: { [key: string]: number };
  totalStars: number;
  totalForks: number;
}

export function useGitHub(): GitHubData {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<{ [key: string]: number }>({});
  const [totalStars, setTotalStars] = useState(0);
  const [totalForks, setTotalForks] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [profileRes, reposRes] = await Promise.all([
          fetch(`${githubConfig.apiBase}/users/${githubConfig.username}`, {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }),
          fetch(`${githubConfig.apiBase}/users/${githubConfig.username}/repos?sort=updated&per_page=30`, {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }),
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const profileData: GitHubProfile = await profileRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        // Calculate language stats
        const langCount: { [key: string]: number } = {};
        let stars = 0;
        let forks = 0;

        reposData.forEach(repo => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
          stars += repo.stargazers_count;
          forks += repo.forks_count;
        });

        setProfile(profileData);
        setRepos(reposData);
        setLanguages(langCount);
        setTotalStars(stars);
        setTotalForks(forks);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { profile, repos, loading, error, languages, totalStars, totalForks };
}
