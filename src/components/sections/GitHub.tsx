import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, AlertCircle, Loader2, GitBranch } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import SectionWrapper from '../ui/SectionWrapper';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useGitHub } from '../../hooks/useGitHub';
import { githubConfig } from '../../config/portfolio.config';

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Shell: '#89E051',
  'Jupyter Notebook': '#DA5B0B',
};

function getColor(lang: string) {
  return LANG_COLORS[lang] || '#2563EB';
}

export default function GitHub() {
  const { profile, repos, loading, error, languages, totalStars, totalForks } = useGitHub();

  const langData = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, value: count, color: getColor(name) }));

  const displayRepos = repos
    .filter(r => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 6);

  return (
    <SectionWrapper id="github">
      {/* Header */}
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          <GitBranch size={12} /> GitHub Activity
        </motion.div>
        <h2 className="section-title gradient-text">Code on GitHub</h2>
        <p className="section-subtitle">
          Real repositories, real code. Live data from{' '}
          <a href={`https://github.com/${githubConfig.username}`} target="_blank" rel="noopener noreferrer"
            className="text-blue-400 hover:underline">
            @{githubConfig.username}
          </a>
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-20 gap-3 text-slate-500">
          <Loader2 size={20} className="animate-spin text-blue-400" />
          Loading GitHub data...
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-900/20 border border-red-500/20 text-red-400">
          <AlertCircle size={18} />
          <span className="text-sm">Unable to load GitHub data: {error}</span>
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Profile Card */}
          {profile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <img src={profile.avatar_url} alt={profile.login}
                className="w-20 h-20 rounded-2xl border-2 border-blue-500/40 shadow-glow" />
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-bold text-white">{profile.name || profile.login}</h3>
                <p className="text-blue-400 text-sm mb-2">@{profile.login}</p>
                {profile.bio && <p className="text-slate-400 text-sm mb-3">{profile.bio}</p>}
                {profile.location && <p className="text-slate-500 text-xs">📍 {profile.location}</p>}
              </div>
              <div className="flex sm:flex-col gap-4 sm:gap-2 text-center">
                <div>
                  <div className="text-xl font-bold text-white">
                    <AnimatedCounter end={profile.public_repos} />
                  </div>
                  <div className="text-xs text-slate-500">Repos</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    <AnimatedCounter end={totalStars} />
                  </div>
                  <div className="text-xs text-slate-500">Stars</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    <AnimatedCounter end={totalForks} />
                  </div>
                  <div className="text-xs text-slate-500">Forks</div>
                </div>
              </div>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
                id="github-profile-link"
              >
                <GitBranch size={14} />
                View Profile
              </a>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Repositories */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-4">Repositories</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {displayRepos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="animated-border block"
                    id={`repo-${repo.name}`}
                  >
                    <div className="card p-4 flex flex-col gap-3 h-full hover:border-blue-500/30 transition-all">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <GitBranch size={14} className="text-slate-500 flex-shrink-0" />
                          <span className="font-semibold text-sm text-white truncate">{repo.name}</span>
                        </div>
                        <ExternalLink size={12} className="text-slate-600 flex-shrink-0 mt-0.5" />
                      </div>
                      {repo.description && (
                        <p className="text-xs text-slate-500 line-clamp-2 flex-1">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-3 text-xs text-slate-600">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full" style={{ background: getColor(repo.language) }} />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star size={11} /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={11} /> {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Language Chart */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Languages</h3>
              {langData.length > 0 ? (
                <div className="card p-5">
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie
                        data={langData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={90}
                        dataKey="value"
                        paddingAngle={3}
                      >
                        {langData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: unknown) => [`${value} repos`, '']}
                        contentStyle={{ background: '#111827', border: '1px solid #1E293B', borderRadius: 8 }}
                        labelStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2 mt-2">
                    {langData.map(({ name, value, color }) => (
                      <div key={name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: color }} />
                          <span className="text-slate-400">{name}</span>
                        </div>
                        <span className="text-slate-500">{value} {value === 1 ? 'repo' : 'repos'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="card p-5 text-center text-slate-500 text-sm">No language data available</div>
              )}

              {/* Contribution note */}
              <div className="card p-4 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white font-medium">Active Developer</span>
                </div>
                <p className="text-xs text-slate-500">
                  Actively building and maintaining management software on GitHub. Data refreshes on every visit.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </SectionWrapper>
  );
}
