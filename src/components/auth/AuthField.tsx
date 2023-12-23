'use client'

import { FC, HTMLInputTypeAttribute, FocusEvent, ChangeEvent } from 'react';
import styles from '@/styles/auth.module.scss';

interface AuthFiledProps {
  id: string
  type: HTMLInputTypeAttribute
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void
  error:string | false | undefined
  required?:boolean
}

export const AuthField: FC<AuthFiledProps> = ({ id, type, value, error, required, handleChange, handleBlur }) => {
  const inputFinishInput = error ? `${styles.authFieldInput} ${styles.error}` : styles.authFieldInput;
  return (
    <div className={styles.authField}>
      <label htmlFor={id} className={styles.authFieldLabel}>{id}</label>
      <input
        id={id}
        placeholder={id}
        type={type}
        name={id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={inputFinishInput}
        required={required}
      />
      <div className={styles.authFieldError}>{error}</div>
    </div>
  )
}