import styled from 'styled-components'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import { QUERIES } from '../../constants'

// https://www.npmjs.com/package/react-simple-code-editor
// https://codesandbox.io/s/react-simple-code-editor-wgvnk?file=/src/prism.css
 
const CodeBox = (props) => {
  const code = props.children.props.children
  const language = props.children.props.className.split('-')[1]
  const langImport = {
    javascript: languages.js,
    css: languages.css,
    html: languages.markup
    
  }
  return (
    <Wrapper>
      <MyEditor
        value={code}
        highlight={code => highlight(code, langImport[language])}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          pointerEvent: 'none',
          fontSize: 'calc(16 / 16 * 1rem)',
          background: 'inherit',
        }}
        disabled
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 32px;
  margin-left: -32px;
  margin-right: -32px;
  margin-bottom: 20px;
  border-radius: 8px;
  background: var(--color-gray-200);

  @media ${QUERIES.phoneAndDown} {
    padding: 32px 16px;
    margin-left: 0;
    margin-right: 0;
  }
`

const MyEditor = styled(Editor)` 
  /* -- Syntax Highlighting Style Start -- */
  code[class*="language-"],
  pre[class*="language-"] {
    color: var(--syntax-black);
    background: none;
    // text-shadow: 0 1px white;
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: var(--syntax-background-light-blue);
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: var(--syntax-background-light-blue);
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*="language-"] {
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: var(--syntax-background-light-gray);
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--syntax-slategray);
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .token.punctuation {
    color: var(--syntax-gray);
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--syntax-tag);
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--syntax-selector);
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: var(--syntax-operator);
    background: inherit;
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--syntax-keyword);
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .token.function,
  .token.class-name {
    color: var(--syntax-function);
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--syntax-regex);
    font-family: monospace, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
  /* -- Syntax Highlighting Style End -- */
`

export default CodeBox;