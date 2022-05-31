import { useState } from 'react';
import { QueryType } from 'types/editor';
import { Order } from 'types/table';
import toast from 'react-hot-toast';
import EditorWrapper from 'components/editor/EditorWrapper';
import QueriesSection from 'components/editor/QueriesSection';
import firstQueryData from 'utils/data/first-query.json';
import secondQueryData from 'utils/data/second-query.json';
import thirdQueryData from 'utils/data/third-query.json';
import CodeEditor from 'components/editor/CodeEditor';
import OutputTable from 'components/editor/OutputTable';

const Editor = () => {
  const [query, setQuery] = useState<string>('SELECT * FROM orders;');
  const [outputData, setOutputData] = useState<Order[]>([]);
  const [savedQueries, setSavedQueries] = useState<string[]>([
    'SELECT * FROM orders;',
    'SELECT orderID, shipName, shipCountry FROM orders;',
    'SELECT orderID, customerID, shipName, shipAddress, shipCity, shipCountry FROM orders;',
  ]);
  const [queryHistory, setQueryHistory] = useState<string[]>([
    'SELECT * FROM orders;',
  ]);

  const runQuery = () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return toast.error(
        'Query cannot be null. Please type a new query, or select from the previously saved queries',
      );
    }

    let output: Order[] = [];
    switch (trimmedQuery) {
      case 'SELECT * FROM orders;':
        output = firstQueryData;
        break;
      case 'SELECT orderID, shipName, shipCountry FROM orders;':
        output = secondQueryData;
        break;
      case 'SELECT orderID, customerID, shipName, shipAddress, shipCity, shipCountry FROM orders;':
        output = thirdQueryData;
    }

    if (!output.length) {
      return toast.error('Please try one of the test queries');
    }

    setOutputData(output);
    setQueryHistory([...queryHistory, trimmedQuery]);
  };

  const saveQuery = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return toast.error('Query cannot be null');
    if (savedQueries.includes(trimmedQuery)) {
      return toast.error('Query has already been saved');
    }

    setSavedQueries([...savedQueries, trimmedQuery]);
  };

  const deleteQuery = (type: QueryType, index: number) => {
    if (type === 'saved') {
      const updatedQueries = [...savedQueries];

      updatedQueries.splice(index, 1);
      setSavedQueries(updatedQueries);
    } else {
      const updatedQueries = [...queryHistory];

      updatedQueries.splice(index, 1);
      setQueryHistory(updatedQueries);
    }
  };

  return (
    <EditorWrapper>
      <QueriesSection
        savedQueries={savedQueries}
        queryHistory={queryHistory}
        setEditorQuery={setQuery}
        deleteQuery={deleteQuery}
      />

      <div>
        <CodeEditor
          query={query}
          setQuery={setQuery}
          runQuery={runQuery}
          saveQuery={saveQuery}
        />

        <OutputTable outputData={outputData} />
      </div>
    </EditorWrapper>
  );
};

export default Editor;
