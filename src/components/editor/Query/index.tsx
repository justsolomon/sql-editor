import { ReactComponent as DeleteIcon } from 'assets/trash.svg';
import { QueryUtilFunctions } from 'types/editor';
import Button from 'components/global/Button';
import styles from './query.module.scss';

interface QueryProps extends QueryUtilFunctions {
  value: string;
  index: number;
  hasConstants?: boolean;
}

const Query = ({
  value,
  index,
  hasConstants,
  setEditorQuery,
  deleteQuery,
}: QueryProps) => {
  return (
    <div className={styles['query']} onClick={() => setEditorQuery(value)}>
      {value}

      {!hasConstants || (hasConstants && index > 2) ? (
        <Button
          variant="icon"
          colorScheme="red"
          aria-label="Delete query"
          onClick={() => deleteQuery(index)}
        >
          <DeleteIcon />
        </Button>
      ) : null}
    </div>
  );
};

export default Query;
