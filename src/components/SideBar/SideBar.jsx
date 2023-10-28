import React, { useEffect, useState } from "react";
import tabsData from "../../tabs.json";

import styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    setTabs(tabsData);
  }, []);

  return (
    <div className={styles.root}>
      {tabs.map(({ title, id }, idx) => (
        <Link key={idx} to={`/${id}`}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
