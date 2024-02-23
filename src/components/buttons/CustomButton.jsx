import divideStyleIDString from "../../utils/divideStyleIDString";
import styles from "./CustomButton.module.css";
/**
 * id값을 프롭으로 내려줘서 임마를 기준으로 스타일 지정
 *
 * @param {string} text 버튼 안에 들어갈 텍스트
 * @param {string} styleID 클래스이름 선택자,두개 이상일 경우 공백으로 구분
 * @returns
 */
export default function CustomButton({ text, styleID = "", onClick, disabled = false, type = "button" }) {
  return (
    <button disabled={disabled} type={type} className={`${divideStyleIDString(styles, styleID)}`} onClick={onClick}>
      {text}
    </button>
  );
}

