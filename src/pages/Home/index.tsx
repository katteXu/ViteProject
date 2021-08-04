import React from 'react';
import styles from './styles.module.less';
import { useHistory, Link } from 'react-router-dom';
const Index: React.FC = (props) => {
  const history = useHistory();

  return (
    <div className={styles.main}>
      <Link to="/camera" className={styles.card}>
        <div className={styles.title}>视频监控</div>
      </Link>
      <Link to="/equipment" className={styles.card}>
        <div className={styles.title}>设备监控</div>
      </Link>
    </div>
  );
};

export default Index;
