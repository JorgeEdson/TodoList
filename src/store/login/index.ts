import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type ILoginDto } from "../../types/LoginDTO";

interface IState {
  content: ILoginDto;
}

const initialState: IState = {
  content: {
    email: "",    
    senha: "",   
  },
};

const slice = createSlice({
  name: "login/LoginForm",
  initialState,
  reducers: {
    setForm(state: IState, { payload }: PayloadAction<any>) {
      state.content = { ...state.content, ...payload };
    },
  },
});

export const { setForm } = slice.actions;

export type IForm = typeof initialState.content

export default slice.reducer;
