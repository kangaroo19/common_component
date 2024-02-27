import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/OptionCustom.module.css';

// 배열을 프롭으로 줘서 여기서 반복문을 돌까?
// 아니면 원래 select,option 태그 사용법처럼
// 반복문 돌지 않고 직접 줄까?

// 최대한 원본 태그처럼 사용 가능 하도록 만들기
export default function OptionCustom({ children, styleID, value }) {
  return (
    <option value={value} className={`${divideStyleIDString(styles, styleID)}`}>
      {children}
    </option>
  );
}
