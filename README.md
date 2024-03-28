# CRUD기능 포함한 몬스터 도감(이지만 사실상 ToDoList)
![Recording 2024-03-28 at 13 18 21](https://github.com/kangaroo19/common_component/assets/86513078/46d8544d-f8f9-46c1-9532-7f3c9f5b9900)

## 주로 사용한 라이브러리 

##### 사실 사용한 이유는 딱히 없다... 토이 프로젝트 이기도 하고 그냥 새로 배운게 있어서 학습하려고 사용했을 뿐..그래도 한번 써보자면..
![davaid (1)](https://github.com/kangaroo19/common_component/assets/86513078/06ddcc63-fddc-44d9-9af4-47b6b41fd8fc)
~~뭔가 이런느낌..?~~
- **react-query** : 효과적인 서버 상태 관리 위해서 사용, 각 요청 성공 여부에 따른 메시지도 이것으로 처리하였다.
- __json-server__ : 비동기 요청으로 목업데이터 사용하기 위해 사용
- __react-hook-form__ : input,button 같은 태그를 재사용하기 위해 공통 컴포넌트를 만들었는데 (그래서 레포 이름도..ㅋㅋ) <br>
input 태그 같은 경우 react-hook-form 을 사용하면 이를 효과적으로 구현 할 수 있고 input필드의 상태값도 좀 더 편하게 사용 가능하여서 사용하였다
- __zustand__ : 이것 까진 사용 할 생각은 없었는데 클라이언트 관련 상태는 zustand로 하는게 더 좋지 않을까 싶어서 사용하였다, update 관련 기능에서만 사용된다
- __mui__ : 아이콘과 레이아웃 작업에 사용하였다

## 공통 컴포넌트

### input 컴포넌트

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


### input button 컴포넌트

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

### form 컴포넌트
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
위의 Form컴포넌트는 react-hook-form에서 제공하는 컴포넌트이고 코드에서 볼 수 있듯 onError,onSuccess 같은 속성을 제공해 주는데,
요청 성공 여부에 따른 분기는 react-query 함수에서 작성하였으므로 해당 속성에 값은 따로 들어가지는 않는다

이렇게 코드를 작성하면 다른 컴포넌트에서 사용 할 때는
```js
        <FormMain>
          <FormMain.Label htmlFor="monsterLevel">몬스터 레벨</FormMain.Label>
          <FormMain.Input id="monsterLevel" registerFn={register('level')} styleID="input_monster glass-container" />
        </FormMain>
```
이렇게 사용하면 되는데 나는 이러한 패턴이 보기에 너무 좋아서 저렇게 코드를 작성하였다 (지극히 개인적인 의견)
몬스터 도감에 사용한 주요한 공통 컴포넌트는 이것이 전부이고 나머지 컴포넌트인 label 컴포넌트는 별 거 없고, button 컴포넌트는 위에서 작성한 input[type="button"]과 사실상 동일하므로 따로 작성하진 않았다

## App.js
```js
const queryClient = new QueryClient();

function App() {
  const method = useForm();
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...method}>
        <ToastContainer // toastify 사용위함
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
        <Layout styleID="monsterLayout glass-container"> // 레이아웃
          <Header>몬스터 도감</Header> // styled-components로 작성
          <MonsterForm /> 
          <MonsterList /> 
        </Layout>
      </FormProvider>
    </QueryClientProvider>
  );
}

export default App;
```
먼저 react-query와 관련된 서버상태 값을 사용하기 위해 QueryClientProvider로 감싸주고<br>
폼 필드 간의 상태를 전역적으로 관리하기 위해 FormProvider로 다시 한번 감싸주었다
- MonsterForm : 몬스터 등록 및 수정하는 컴포넌트
- MonsterList : db에 저장된 몬스터에 대한 데이터 페칭하는 컴포넌트

※post,get,delete 요청은 굉장히 단순하므로 patch와 관련된 코드를 중심으로 작성하였다<br>
또한, 가독성을 위해 update와 관련되지 않은 코드는 제거하였다
## useToggleUpdateBtn.js
```js
import { create } from 'zustand';

export const useToggleUpdateBtn = create((set) => ({
  isUpdate: false,

  setIsUpdateTrue: () => { // isUpdate 값을 true로 
    set({ isUpdate: true });
  },
  setIsUpdateFalse: () => { // isUpdate 값을 false로
    set({ isUpdate: false });
  },
}));

```
post요청을 보내는 같은 MonsterForm 컴포넌트에서 patch 요청도 보낼 것이므로 현재 몬스터 수정 중인지에 대한 상태를 관리하기 위해 zustand를 사용하였다 
- isUpdate : true, 현재 수정 진행 중 (patch 요청)
- isUpdate : false, 현재 수정 진행 중 아님 (post 요청)
## MonsterList.jsx
```js
export default function MonsterList() {
  const { setValue } = useFormContext();
  const { setIsUpdateTrue } = useToggleUpdateBtn();

  const onClickUpdateMonster = (monster) => {
    setValue('monsterName', monster.monsterName);
    setValue('level', monster.level);
    setValue('id', monster.id);
    setIsUpdateTrue();
  };
  return (
    // jsx코드 생략
  );
}
```

react-hook-form 의 form 필드의 값을 설정할 때 사용하는 setValue 함수를 통해 <br>
수정 버튼을 누른 해당 몬스터에 대한 정보를 저장해주고 setIsUpdateTrue 함수를 통해 isUpdate 값을 true로 바꿔주자<br>
setValue의 첫번째 인자인 문자열은 MonsterForm에서 register 함수의 인자값과 동일해야한다는 점에 주의하자
![Recording 2024-03-28 at 16 06 32](https://github.com/kangaroo19/common_component/assets/86513078/808c00e9-82a2-452a-b1de-d858548b7aee)
이렇게 동일하게 설정해 주면 MonsterForm에 수정 버튼을 누른 몬스터에 대한 정보가 인풋필드에 채워지게 된다

## MonsterForm.jsx
```js
export default function MonsterForm() {
  const { register, handleSubmit, reset } = useFormContext();
  const { isUpdate, setIsUpdateFalse } = useToggleUpdateBtn();
  const { refetch } = useMonsterDataQuery();

  const isUpdateObj = {
    isUpdateText: isUpdate ? '몬스터 수정' : '몬스터 등록', // 버튼에 들어갈 텍스트
    mutateFn: isUpdate 
      ? useMonsterMutationUpdate(reset, refetch, setIsUpdateFalse)
      : useMonsterMutationPost(reset, refetch),
  };
  // post or patch method
  const handleFormButton = (data) => {
    const { name, level } = data;
    if (name === '' || level === '') return;
    isUpdateObj.mutateFn.mutate(data);
  };

  const onClickResetBtn = () => {
    // 초기화 버튼 클릭시 모든 상태 초기화됨
    reset();
    setIsUpdateFalse();
  };

  return (
    // jsx코드 생략
  );
}
```
isUpdateObj은 isUpdate 값에 따른 버튼에 랜더링될 텍스트, 사용할 훅이 달라지는 객체이다<br>
원래는 각각 변수를 따로 둬서 isUpdate값에 따른 분기처리했는데 이렇게 하나의 객체로 묶는 것이 가독성이 더 좋다고 판단하여 저렇게 코드를 수정하였다<br>
post요청과 patch요청은 같은 함수(handleFormButton)에서 처리된다
