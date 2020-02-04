import React from 'react';
import style from './Project.module.css';

const Project = (props) => {
    return(
      <div className={style.project}>
          <div className={style.image} style={{backgroundImage: `url(${props.background})`}}>
              <button className={style.watchButton}> Watch </button>
          </div>
          <div className={style.describe}>
              <div className={style.name}>{props.name}</div>
              <div className={style.message}>{props.message}</div>
          </div>
      </div>
    );
};

export default Project