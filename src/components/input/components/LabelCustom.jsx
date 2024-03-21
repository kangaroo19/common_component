import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../styles/LabelCustom.module.css';

export default function LabelCustom({ styleID, children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={`${divideStyleIDString(styles, styleID)}`}>
      {children}
    </label>
  );
}
