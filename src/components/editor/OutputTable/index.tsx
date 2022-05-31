import Button from 'components/global/Button';
import { CSVLink } from 'react-csv';
import { Order } from 'types/table';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import { ReactComponent as DownloadIcon } from 'assets/download.svg';
import styles from './outputTable.module.scss';

interface OutputTableProps {
  outputData: Order[];
}

const OutputTable = ({ outputData }: OutputTableProps) => {
  const tableHeaderRows = outputData.length ? Object.keys(outputData[0]) : [];

  return outputData.length ? (
    <div className={styles['output-data']}>
      <h2 className={styles['output-data__heading']}>Output:</h2>

      <div className={styles['output-data__content']}>
        <div className={styles['output-data__sub-heading']}>
          <h3>
            <span>Number of records:</span> {outputData.length}
          </h3>
          <CSVLink data={outputData} filename="output-data.csv">
            <Button leftIcon={<DownloadIcon />}>Export</Button>
          </CSVLink>
        </div>

        <div className={styles['output-data__table-container']}>
          <table className={styles['output-data__table']}>
            <thead>
              {tableHeaderRows.map((row) => (
                <th>{row}</th>
              ))}
            </thead>
            <tbody>
              {outputData.map((data) => (
                <tr>
                  {tableHeaderRows.map((row) => (
                    <td>{data[row as keyof Order]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles['no-output']}>
      <PlayIcon />
      <p>Your query output will appear here</p>
    </div>
  );
};

export default OutputTable;
