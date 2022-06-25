import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export default function Checkbox({ ...props }: Props) {
  return (
    <label className={styles.checkbox}>
      <input {...props} type="checkbox" />
      <span></span>
    </label>
  )
}
