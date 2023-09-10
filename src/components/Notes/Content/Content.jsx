import React from 'react'
import ContentStyle from './Content.module.css'
export default function Content() {
  return (
      <div className={ContentStyle.app}>
        <div className={ContentStyle.timestamp}>
        <div>10:10 Am<br/>9 March 2023</div>
        </div>
        <div className={ContentStyle.content}>
        <span>
        Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</span>
        </div>
      </div>
  );
}
