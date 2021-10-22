import { FC } from "react";

import classes from './css/MainContent.module.css';

const MainContent: FC = ({ children }) => {
  return (
    <main>
      <div className={classes.content}>{children}</div>
    </main>
  )
};

export default MainContent;