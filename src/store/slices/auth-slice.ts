import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rootUrl } from "../../config/App"; 

// Interface para o payload de sucesso
interface LoginSuccessPayload {
  token: string;
}

// Interface para o estado do slice
interface AuthState {
  token: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: LoginError | null;
}

// Interface para o erro
interface LoginError {
  message: string;
}

// Definindo o thunk com tipos
export const loginUser = createAsyncThunk<LoginSuccessPayload, { email: string; password: string }, { rejectValue: LoginError }>(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(`${rootUrl}/auth/tenant/login`, credentials);
      return data; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response?.data || { message: 'Unknown error' }); 
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    status: 'idle',
    error: null
  } as AuthState,
  reducers: {
    logOut: (state) => {
      state.token = "";
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.status = 'succeeded';
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
