import React from 'react';
import BooksImageBlock from './BooksImageBlock';
import FollowAuthor from './FollowAuthor';

const LeftPanel = () => {
  return (
    <div id="leftCol">
      <BooksImageBlock />
      <FollowAuthor />
    </div>
  );
}

export default LeftPanel;