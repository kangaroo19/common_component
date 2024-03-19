// styleID가 두개 이상일 수도 있으니 공백을 기준으로 문자열을 나눠서
// 두개 이상의 스타일 적용되도록 하는 함수
export default function divideStyleIDString(styles, styleID = '') {
  const stringArr = styleID.split(' '); // 공백 기준으로 나눔
  const result = stringArr.map((v, i) => {
    return styles[v]; // 클래스 이름은 styles.클래스명 이런식으로 되기 때문
  });
  return result.join(' ');
}

// 이렇게 styleID를 사용하여 스타일 적용 시
// CustomButton 컴포넌트를 재사용 할 수 있고
// 버튼 스타일 변경 시 해당 페이지 컴포넌트가 아닌
// CustomButton.module.css만 들어가면 되서 편한듯함

// 그런데 협업 시에는 충돌 많이 날듯..

// styleID가 없는 경우를 대비하여 묵시적인자 styleID="" 추가
