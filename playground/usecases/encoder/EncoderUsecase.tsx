import React, { useState, type FC } from 'react';

import { encodeString } from '../../../src/index.js';
import type { Usecase } from '../types.js';
import styles from './EncoderUsecase.module.css';

function formatHex(value: number): string {
  return `0x${value.toString(16).toUpperCase().padStart(8, '0')}`;
}

const EncoderUsecaseComponent: FC = () => {
  const [input, setInput] = useState('hesoyam');
  const cheat = encodeString(input);

  return (
    <div>
      <h1>Encoder</h1>
      <p>Transform a text cheat code into the numeric value used by the listener.</p>
      <label className={styles.label} htmlFor='encoder-input'>
        Text code
      </label>
      <input
        id='encoder-input'
        className={styles.input}
        value={input}
        placeholder='hesoyam'
        spellCheck={false}
        onChange={(event) => setInput(event.target.value)}
      />
      <dl className={styles.result}>
        <div>
          <dt>Decimal</dt>
          <dd>
            <code>{cheat}</code>
          </dd>
        </div>
        <div>
          <dt>Hex</dt>
          <dd>
            <code>{formatHex(cheat)}</code>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export const EncoderUsecase: Usecase = {
  name: 'Encoder',
  directory: 'encoder',
  Component: EncoderUsecaseComponent,
};