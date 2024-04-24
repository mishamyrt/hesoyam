import React from 'react'

import { usecases } from './usecases/usecases.js'
import { Link } from 'react-router-dom'

export const UsecaseList = () => (
  <div>
    <h1>Hesoyam usecases</h1>
    {usecases.map(({ directory, name }) => (
      <Link
        key={directory}
        to={`/usecases/${directory}`}
      >
        {name}
      </Link>
    ))}
  </div>
)
