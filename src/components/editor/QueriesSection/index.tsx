import { ReactComponent as CloudIcon } from 'assets/cloud.svg';
import { ReactComponent as HistoryIcon } from 'assets/history.svg';
import { QueryType } from 'types/editor';
import QueriesSectionItem from '../QueriesSectionItem';
import styles from './queriesSection.module.scss';

interface QueriesSectionProps {
  savedQueries: string[];
  queryHistory: string[];
  setEditorQuery: (value: string) => void;
  deleteQuery: (type: QueryType, index: number) => void;
}

const QueriesSection = ({
  savedQueries,
  queryHistory,
  setEditorQuery,
  deleteQuery,
}: QueriesSectionProps) => {
  return (
    <div className={styles['queries-section']}>
      <QueriesSectionItem
        title="Saved Queries"
        icon={<CloudIcon />}
        queries={savedQueries}
        setEditorQuery={setEditorQuery}
        deleteQuery={(index) => deleteQuery('saved', index)}
        hasConstants
      />

      <QueriesSectionItem
        title="Query History"
        icon={<HistoryIcon />}
        queries={queryHistory}
        setEditorQuery={setEditorQuery}
        deleteQuery={(index) => deleteQuery('history', index)}
      />
    </div>
  );
};

export default QueriesSection;
