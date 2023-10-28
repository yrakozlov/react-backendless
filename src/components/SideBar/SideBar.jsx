import React, { useEffect, useState } from "react";
import tabsData from "../../tabs.json";

import styles from "./SideBar.module.scss";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const [tabs, setTabs] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  return (
    <div className={styles.root}>
      {tabs.map(({ title, id }, idx) => (
        <Link
          className={`${styles.link}${
            pathname === `/${id}` ? ` ${styles.active}` : ""
          }`}
          key={idx}
          to={`/${id}`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
