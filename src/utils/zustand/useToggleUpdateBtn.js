/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const useToggleUpdateBtn = create((set) => ({
  isUpdate: false,
  setIsUpdate: () => {
    // 토글 함수 정의
    set((state) => ({ isUpdate: !state.isUpdate }));
  },
  setIsUpdateTrue: () => {
    set({ isUpdate: true });
  },
  setIsUpdateFalse: () => {
    set({ isUpdate: false });
  },
}));
