import Query from '../Query';
import { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { QueryUtilFunctions } from 'types/editor';
import styles from './queriesSectionItem.module.scss';

interface SectionItemProps extends QueryUtilFunctions {
  title: string;
  icon: React.ReactNode;
  queries: string[];
  hasConstants?: boolean;
}

const QueriesSectionItem = ({
  title,
  icon,
  queries,
  ...rest
}: SectionItemProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedQueries, setDisplayedQueries] = useState<string[]>(queries);

  useEffect(() => {
    const filteredQueries = queries.filter((query) => {
      const regex = new RegExp(searchQuery, 'gi');

      return query.match(regex);
    });

    setDisplayedQueries(filteredQueries);
  }, [searchQuery, queries]);

  return (
    <div className={styles['section-item']}>
      <h2 className={styles['section-item__header']}>
        {icon}
        {title}
      </h2>

      <div className={styles['section-item__search-query']}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <ul className={styles['section-item__query-list']}>
        {!displayedQueries.length ? <p>No queries available</p> : null}

        {displayedQueries.map((query, index) => (
          <li key={index}>
            <Query value={query} index={index} {...rest} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueriesSectionItem;
