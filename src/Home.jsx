import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    id2: 'ddddddd',
    pw2: '',
  });
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setFormData({ ...formData, [name]: value });
  };
  const onClick = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form action="" onChange={onChange}>
      <input type="text" name="id2" value={formData.id2} />
      <input type="text" name="pw2" />
      <button type="button" onClick={onClick}>
        체크!
      </button>
    </form>
  );
}
