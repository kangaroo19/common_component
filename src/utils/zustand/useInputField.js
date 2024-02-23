/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const useInputField = create((set) => ({
  formData: {},
  onChangeFormData: (event) => {
    const {
      target: { name },
    } = event;
    const {
      target: { value },
    } = event;
    set((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  },
}));
