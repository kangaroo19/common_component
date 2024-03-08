// with traditional html form tags

import { useState } from 'react';
import CustomButton from '../buttons/CustomButton';

export default function FormC() {
  const [formData, setFormData] = useState({
    id: '',
    pw: '',
  });
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setFormData({ ...formData, [name]: value });
  };
  const onClick = () => {
    console.log(formData);
  };
  return (
    <form action="" onChange={onChange}>
      <input type="text" name="id" />
      <input type="text" name="pw" />
      {/* <input type="checkbox" name="" id="" /> */}
      {/* <input type="checkbox" name="" id="" /> */}
      {/* <input type="radio" /> */}
      {/* <input type="radio" /> */}
      {/* <input type="radio" /> */}
      <CustomButton text="느금" onClick={onClick} />
    </form>
  );
}
