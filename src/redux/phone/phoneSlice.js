import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const init = [
  { id: 'S0V2NE44z1i733lO3c7Ic', name: 'Вячеслав', number: '654564' },
  { id: 'msqBJPeJouMKjvIDos0pw', name: 'Alena', number: '258489' },
  { id: 'msqBJPeJouMKjvIDos0pl', name: 'Serhiy', number: '348596' },
  { id: 'S0V2NE44z1i733lO3c7I2', name: 'Вячеслав', number: '654564' },
  { id: 'msqBJPeJouMKjvIDos0p3', name: 'Alena', number: '258489' },
  { id: 'msqBJPeJouMKjvIDos0p4', name: 'Serhiy', number: '348596' },
];

export const phoneSlice = createSlice({
  name: 'phone',
  initialState: { init },
  reducers: {
    addPhone(state, action) {
      state.init.push(action.payload);
    },
    removePhone(state, action) {
      state.init = action.payload;
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterCont(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addPhone, removePhone } = phoneSlice.actions;
export const { filterCont } = filterSlice.actions;
