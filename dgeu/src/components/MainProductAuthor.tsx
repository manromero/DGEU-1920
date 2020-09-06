import React from 'react';
import useStyles from '../styles/MainProductAuthor';

interface IProps {
  author: string;
  authorUrl: string;
}

const MainProductAuthor = ({ authorUrl, author }: IProps) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        de
        <span>
          <span>
            <a href={authorUrl}>{' '}{author}</a>
          </span>
          <span>
            <span className={classes.authorLabel}> (Autor)</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default MainProductAuthor;