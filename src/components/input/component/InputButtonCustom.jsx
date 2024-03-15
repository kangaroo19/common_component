import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/InputButtonCustom.module.css';

/**
 *
 * @param {string} type 버튼 타입 디폴트값은 button
 * @param {string} StyleID 스타일 지정위한 문자열
 * @param {*} onClick onClick 이벤트 함수
 * @param {string} text 버튼 안에 들어갈 텍스트
 * @returns
 */

export default function InputButtonCustom({ type = 'button', styleID, onClick, text }) {
  if (type !== 'button' && type !== 'submit') {
    throw new Error(`Invalid type '${type}' for InputButtonCustom. Type must be 'button' or 'submit'.`);
  }

  return <input type={type} onClick={onClick} className={`${divideStyleIDString(styles, styleID)}`} value={text} />;
}
