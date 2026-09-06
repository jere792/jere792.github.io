'use client';
import './Header.scss';

export function Header() {
  return (
    <header className="vscode-header">
      <div className="window-controls">
        <span className="control-btn close"></span>
        <span className="control-btn minimize"></span>
        <span className="control-btn maximize"></span>
      </div>
      <div className="title-bar">
        <span className="title">Portfolio - Jeremy</span>
      </div>
      <div className="window-right">
        <span className="icon">&#9680;</span>
        <span className="icon">&#9633;</span>
        <span className="icon">&#10005;</span>
      </div>
    </header>
  );
}
