/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

const initialState = {
  id: '',
  pw: '',
};

export const useInputField = create((set) => ({
  formData: {},
  onChangeFormData: (event) => {
    const { value, name } = event.target;
    set((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  },
}));
