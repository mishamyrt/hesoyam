import React, { useEffect, useMemo, useState, type FC } from 'react'

import { createCheatsListener, type CheatMap } from '../../../src/index.js'
import clsx from 'clsx'
import type { Usecase } from '../types.js'
import styles from './BackgroundUsecase.module.css'

const cheats: CheatMap = {
  hesoyam: 0x0700E608,
  aspirine: 0x0800DC07,
  fannymagnet: 0x0B06540F,
  fightfightfight: 0x0F01420F,
  alovelyday: 0x0A00DA08,
  professionaltools: 0x1100730B,
  panzer: 0x06000008
}

const BackgroundUsecaseComponent: FC = () => {
  const [activated, setActivated] = useState<string[]>([])

  const cheatNames = useMemo(() => Object.keys(cheats), [])

  useEffect(() => {
    const { start, stop } = createCheatsListener({
      onCheat: (name: string) => {
        setActivated((prev) => {
          if (prev.includes(name)) {
            return prev.filter((n) => n !== name)
          }
          return [...prev, name]
        })
      },
      cheats
    })
    start()
    return stop
  }, [])

  return (
    <div>
      <h1>Background</h1>
      <p>
        This is a demonstration of entering cheat codes without input fields.
        Type the codes that are listed below.
      </p>
      <ul className={styles.cheats}>
        {cheatNames.map((name) => (
          <li key={name} className={clsx(styles.cheat, {
            [styles.activated]: activated.includes(name)
          })}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export const BackgroundUsecase: Usecase = {
  name: 'Background',
  directory: 'background',
  Component: BackgroundUsecaseComponent
}
