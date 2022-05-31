import Button from 'components/global/Button';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import { ReactComponent as SaveIcon } from 'assets/save.svg';
import { ReactComponent as ClearIcon } from 'assets/clear.svg';
import styles from './codeEditor.module.scss';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/hint/sql-hint.js';

interface CodeEditorProps {
  query: string;
  setQuery: (query: string) => void;
  runQuery: () => void;
  saveQuery: () => void;
}

const CodeEditor = ({
  query,
  setQuery,
  runQuery,
  saveQuery,
}: CodeEditorProps) => {
  const editorOptions = {
    lint: true,
    mode: 'sql',
    lineNumbers: true,
    keyMap: 'sublime',
    matchBrackets: true,
    addModeClass: true,
    showHint: true,
  };

  return (
    <div className={styles['code-editor']}>
      <div className={styles['code-editor__textarea']}>
        <CodeMirror
          value={query}
          onBeforeChange={(editor, data, value) => setQuery(value)}
          options={editorOptions}
          aria-label="code-editor"
        />

        <p className={styles['code-editor__note']}>
          <span>NOTE: </span>Click on a previously saved query to begin.
        </p>
      </div>

      <div className={styles['code-editor__action-buttons']}>
        <Button leftIcon={<PlayIcon />} onClick={runQuery}>
          Run
        </Button>

        <Button variant="outline" leftIcon={<SaveIcon />} onClick={saveQuery}>
          Save
        </Button>

        <Button
          colorScheme="red"
          leftIcon={<ClearIcon />}
          onClick={() => setQuery('')}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default CodeEditor;
