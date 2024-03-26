/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const useToggleUpdateBtn = create((set) => ({
  isUpdate: false,

  setIsUpdateTrue: () => {
    set({ isUpdate: true });
  },
  setIsUpdateFalse: () => {
    set({ isUpdate: false });
  },
}));
