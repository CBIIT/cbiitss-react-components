import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneLight';

export function CodeRenderer({
    code = '',
    language = 'jsx',
    removeIndentation = false,
}) {
    if (removeIndentation) {
        code = unindent(code)
    }

    return <Highlight {...defaultProps} code={code} language={language} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
}

function unindent(code) {
    // remove leading empty line, and trailing whitespace and split lines
    let lines = code.replace(/^\s*\n/, '').trimRight().split('\n');

    // determine smallest left indent for all lines
    let leftIndent = lines
        .filter(line => !/^\s*$/.test(line)) // ignore empty lines
        .reduce((smallestIndent, line) => 
            Math.min(smallestIndent, line.match(/[^\s]/).index), // index of first non-space character
            Number.MAX_SAFE_INTEGER // default indentation value
        );

    // join lines, removing left indentation
    return lines.map(line => line.slice(leftIndent)).join('\n');     
}