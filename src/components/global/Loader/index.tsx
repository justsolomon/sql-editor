import LoaderAnimation from 'assets/loader.gif';
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['loader']}>
      <img src={LoaderAnimation} alt="Loader animation" />
    </div>
  );
};

export default Loader;
