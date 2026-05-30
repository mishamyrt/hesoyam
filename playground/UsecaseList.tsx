import React from "react";

import { usecases } from "./usecases/usecases.js";
import { Link } from "react-router-dom";
import styles from "./UsecaseList.module.css";

export const UsecaseList = () => (
  <div>
    <h1>Hesoyam usecases</h1>
    <nav className={styles.usecases}>
      {usecases.map(({ directory, name }) => (
        <Link key={directory} to={`/usecases/${directory}`}>
          {name}
        </Link>
      ))}
    </nav>
  </div>
);
