import divideStyleIDString from '../../utils/divideStyleIDString';
import styles from './Layout.module.css';

export default function Layout({ children, styleID }) {
  return <div className={`${divideStyleIDString(styles, styleID)}`}>{children}</div>;
}
