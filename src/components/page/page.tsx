import React from "react";

import classes from "./page.module.css";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => (
  <div className={classes.page}>
    {children}
  </div>
);

export default Page;