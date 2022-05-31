import { Toaster } from 'react-hot-toast';
import Editor from './Editor';
import Layout from 'components/global/Layout';
import 'styles/main.scss';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/hint/sql-hint.js';

const App = () => {
  return (
    <Layout>
      <Editor />
      <Toaster />
    </Layout>
  );
};

export default App;
