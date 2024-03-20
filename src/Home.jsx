import { useState } from 'react';
import CustomButton from './components/buttons/CustomButton';
import { useFormContext } from 'react-hook-form';

export default function Home() {
  const { handleSubmit } = useFormContext();
  const onClickLoginBtn = (data) => {
    console.log(data);
  };

  return <CustomButton text="테스트!!!!!" onClick={handleSubmit(onClickLoginBtn)} />;
}
