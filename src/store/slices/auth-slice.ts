import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rootUrl } from "../../config/App"; 
import { toast } from "react-toastify";

// Interface para o payload de sucesso
interface LoginSuccessPayload {
  token: string;
}

// Interface para o estado do slice
export interface AuthState {
  token: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

// Interface para o erro
interface LoginError {
  message: string;
}

// Definindo o thunk com tipos
export const loginTenant = createAsyncThunk<LoginSuccessPayload, { email: string; password: string }, { rejectValue: LoginError }>(
  'auth/loginTenant',
  async (credentials, { rejectWithValue }) => {
    const toastId = toast.loading('Verificando...');
    try {
      const { data } = await axios.post(`${rootUrl}/auth/tenant/login`, credentials);
      toast.update(toastId, { isLoading: false, render: 'Logged in!', type: 'success', autoClose: 3000 });
      localStorage.setItem('@token-key', data.access_token);
      return data; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.update(toastId, { isLoading: false, render: 'Verifique seu e-mail e senha', type: 'error', autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message: 'Unknown error' }); 
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    status: 'idle',
  } as AuthState,
  reducers: {
    logOut: (state) => {
      state.token = "";
      state.status = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginTenant.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginTenant.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.status = 'succeeded';
      })
      .addCase(loginTenant.rejected, (state) => {
        state.status = 'failed';
        
      });
  }
});

export const { logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
