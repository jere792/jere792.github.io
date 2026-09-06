import './Footer.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const userInfo = {
    name: 'Jeremy Anton',
    email: 'jeremyar792@gmail.com',
    role: 'Systems Engineer',
  };

  const navigationCommands = [
    { command: 'git checkout', page: 'about' },
    { command: 'git checkout', page: 'projects' },
    { command: 'git checkout', page: 'experience' },
    { command: 'git checkout', page: 'contact' },
  ];

  const modifiedFiles = [
    '/components/Header.tsx',
    '/pages/About.tsx',
    '/pages/Projects.tsx',
    '/styles/global.css',
  ];

  const siteInfo = {
    version: '1.0.0',
    lastUpdated: 'January 2026',
    framework: 'Next.js',
    language: 'TypeScript',
  };

  return (
    <footer className="footer-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">jeremy&#64;portfolio:~</span>
          <span className="terminal-badge">bash</span>
        </div>
        
        <div className="terminal-body">
          <div className="footer-grid">
            <div className="left-column">
              <div className="command-block">
                <p className="command-line">
                  <span className="command">git status</span>
                </p>
              </div>

              <div className="git-output">
                <p className="output-comment"># Please enter the commit message for your changes. Lines starting</p>
                <p className="output-comment"># On branch <span className="highlight-red">main</span></p>
                <p className="output-comment"># Your branch is up to date with <span className="highlight-green">&apos;origin/main&apos;</span>.</p>
                <p className="output-comment">#</p>
                <p className="output-info"># Changes to be committed:</p>
                <p className="output-comment"># (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</p>
                <p className="output-comment">#</p>
                {modifiedFiles.map((file) => (
                  <p key={file} className="output-modified"># <span className="modified-label">modified:</span> {file}</p>
                ))}
              </div>

              <div className="command-input">
                <p className="prompt-line">~ git commit -m &quot;feat(ui): implement portfolio footer&quot;<span className="cursor">&#9608;</span></p>
              </div>
            </div>

            <div className="right-column">
              <div className="command-block">
                <p className="section-title">.GIT/CONFIG [USER]</p>
                <p className="config-line"><span className="config-key">name</span> = {userInfo.name}</p>
                <p className="config-line"><span className="config-key">email</span> = {userInfo.email}</p>
                <p className="config-line"><span className="config-key">role</span> = {userInfo.role}</p>
              </div>

              <div className="command-block">
                <p className="section-title">.GIT/CONFIG [NAVIGATION]</p>
                {navigationCommands.map((cmd) => (
                  <p key={cmd.page} className="config-line">
                    <span className="highlight-cyan">{cmd.command}</span> {cmd.page}
                  </p>
                ))}
              </div>

              <div className="terminal-footer">
                <p>~ &copy; {currentYear} {userInfo.name}.</p>
                <p>All systems operational.</p>
                <p>Built with {siteInfo.framework}, {siteInfo.language} &amp; SCSS.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-status-bar">
          <div className="status-left">
            <span className="status-mode insert">INSERT</span>
            <span className="status-branch">MAIN</span>
          </div>
          <div className="status-right">
            <span>UTF-8 | UNIX | {siteInfo.framework} + {siteInfo.language}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
