/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const CircleLoading = (props) => {
  const isShow = props.show;
  const time = props.time || '2s';
  const color = props.color || 'rgba(16, 142, 233, 1)';

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <div className={styles.circle}>
          <div className={styles['circle-bounce1']} style={{animationDuration: time, backgroundColor: color}}></div>
          <div className={styles['circle-bounce2']} style={{animationDuration: time, backgroundColor: color, animationDelay: -time}}></div>
        </div>
      </div>
    </div>
  );
};

CircleLoading.propTypes = {
  time: PropTypes.string,
  show: PropTypes.bool.isRequired
};

export default CircleLoading;