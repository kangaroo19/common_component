import { useEffect, useState } from 'react';
import FormMain from './components/input/FormMain';
// import { useInputField } from './utils/zustand/useInputField';
import { useInputFieldHook } from './utils/hook/useInputFieldHook';

console.log('global');

export default function Home() {
  useEffect(() => {
    console.log('use Effect');
  }, []);

  return <></>;
}
