# CRUD기능 포함한 몬스터 도감(이지만 사실상 ToDoList)

## 주로 사용한 라이브러리 

##### 사실 사용한 이유는 딱히 없다... 토이 프로젝트 이기도 하고 그냥 새로 배운게 있어서 학습하려고 사용했을 뿐..그래도 한번 써보자면..
![davaid (1)](https://github.com/kangaroo19/common_component/assets/86513078/06ddcc63-fddc-44d9-9af4-47b6b41fd8fc)
~~뭔가 이런느낌..?~~
- **react-query** : 효과적인 서버 상태 관리 위해서 사용, 각 요청 성공 여부에 따른 메시지도 이것으로 처리하였다.
- __json-server__ : react-query 사용 중 이므로 임의로 비동기 요청으로 목업데이터 사용하기 위해 사용
- __react-hook-form__ : input,button 같은 태그를 재사용하기 위해 공통 컴포넌트를 만들었는데 (그래서 레포 이름도..ㅋㅋ) <br>
input 태그 같은 경우 react-hook-form 을 사용하면 이를 효과적으로 구현 할 수 있고 input필드의 상태값도 좀 더 편하게 사용 가능하여서 사용하였다
- __zustand__ : 이것 까진 사용 할 생각은 없었는데 클라이언트 관련 상태는 zustand로 하는게 더 좋지 않을까 싶어서 사용하였다, update 관련 기능에서만 사용된다
-__mui__ : 아이콘과 레이아웃 작업에 사용하였다

## input 컴포넌트

```js
export default function InputFieldCustom({ type = 'text', id, styleID, name, placeholder, registerFn, readOnly }) {
  if (type !== 'text' && type !== 'password') {
    throw new Error(`Invalid type '${type}' for InputButtonCustom. Type must be 'text' or 'password'.`);
  }
  return (
    <input
      id={id}
      type={type}
      name={name}
      {...registerFn}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`${divideStyleIDString(styles, styleID)}`}
      aria-label={`inputTEXT_${id}`}
      aria-labelledby={id}
    />
  );
}

```
| 이름  | 타입 | 설명 |
| ------------- | ------------- |------------- |
| id  | string  |입력 필드의 고유 식별자를 지정합니다. |
| type  | string  |입력 필드의 타입을 지정, text 혹은 password 값만 사용가능  |
| registerFn  | function  |react-hook-form 라이브러리에서 제공하는 register 함수를 전달. 이를 사용하여 입력 필드를 폼에 등록할 수 있음.  |
| styleID  | string  |타일을 지정하는 데 사용되는 문자열 식별자. css 파일에서 클래스 이름을 결정하는 데 사용됩니다  |
| placeholder  | string  |입력 필드에 표시되는 플레이스홀더 텍스트를 지정.  |
| readOnly  | bool  |읽기 전용 여부를 나타냄  |

type 값이 text 혹은 password 값이 아니라면 에러가 발생하도록 핸들링하였다


## input button 컴포넌트

```js
export default function InputButtonCustom({ type = 'button', styleID, onClick, text }) {
  if (type !== 'button' && type !== 'submit') {
    throw new Error(`Invalid type '${type}' for InputButtonCustom. Type must be 'button' or 'submit'.`);
  }

  return <input type={type} onClick={onClick} className={`${divideStyleIDString(styles, styleID)}`} value={text} />;
}
```
| 이름  | 타입 | 설명 |
| ------------- | ------------- |------------- |
| type  | string  |버튼의 타입을 지정, button 혹은 submit 값만 사용가능  |
| onClick  | function  |버튼을 클릭했을 때 실행되는 함수  |
| styleID  | string  |타일을 지정하는 데 사용되는 문자열 식별자. css 파일에서 클래스 이름을 결정하는 데 사용됩니다  |

마찬가지로 type 값이 button 혹은 submit 값이 아니라면 에러가 발생하도록 처리하였다

위의 두 컴포넌트는 form 컴포넌트의 자식 컴포넌트로 들어간다

## form 컴포넌트
```js
export default function FormMain({ children, styleID, onSubmit, onError, onSuccess, method, control }) {
  return (
    <Form
      control={control}
      onSubmit={onSubmit}
      method={method}
      onError={onError}
      onSuccess={onSuccess}
      className={`${divideStyleIDString(styles, styleID)}`}
    >
      {children}
    </Form>
  );
}

FormMain.Input = InputFieldCustom;
FormMain.Button = InputButtonCustom;
FormMain.Checkbox = CheckboxCustom;
FormMain.Radio = RadioButton;
FormMain.Label = LabelCustom;
```
