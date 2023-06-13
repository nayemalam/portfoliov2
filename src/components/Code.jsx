import React, { useEffect, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyIcon, PasteIcon } from './assets/icons';

const Code = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code">
      {/* <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard> */}
      <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
    </div>
  );
};

export default Code;
