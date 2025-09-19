import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { usecases } from './usecases/usecases.js'
import styles from './App.module.css'
import { UsecaseList } from './UsecaseList.js'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <UsecaseList />
    },
    ...usecases
      .filter((lib) => Boolean(lib.Component))
      .map(({ directory, Component }) => ({
        path: `/usecases/${directory}`,
        element: <Component />
      }))
  ],
  {
    // basename: import.meta.env.BASE_URL,
  }
)

export function App () {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  )
}
