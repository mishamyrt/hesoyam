import React, { useEffect, useMemo, useState, type FC } from 'react'

import { createCheatsListener } from '../../../src/index.js'
import clsx from 'clsx'
import type { Usecase } from '../types.js'
import styles from './BackgroundUsecase.module.css'

const cheatsMap: Record<number, string> = {
  0x0700e608: 'hesoyam',
  0x0800dc07: 'aspirine',
  0x0b06540f: 'fannymagnet',
  0x0f01420f: 'fightfightfight',
  0x0a00da08: 'alovelyday',
  0x1100730b: 'professionaltools',
  0x06000008: 'panzer'
}

const BackgroundUsecaseComponent: FC = () => {
  const [activated, setActivated] = useState<string[]>([])

  const cheatNames = useMemo(() => Object.values(cheatsMap), [])
  const cheats: number[] = useMemo(
    () => Object.keys(cheatsMap).map((key) => parseInt(key)),
    []
  )

  useEffect(() => {
    const { start, stop } = createCheatsListener({
      onCheat: (cheat: number) => {
        const name = cheatsMap[cheat]
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
          <li
            key={name}
            className={clsx(styles.cheat, {
              [styles.activated]: activated.includes(name)
            })}
          >
            {name}
          </li>
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
