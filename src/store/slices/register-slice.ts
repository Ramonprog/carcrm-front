import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rootUrl } from "../../config/App"; 
import { toast } from "react-toastify";

export interface registerState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

interface RegisterError {
  message: string;
}

interface RegisterSuccessPayload {
  email: string;
  password: string;
  name:string;
}

export const registerTenant = createAsyncThunk<RegisterSuccessPayload,{ email: string; password: string,name:string }, { rejectValue: RegisterError }>(
  'register/registerTenant',
  async (credentials, { rejectWithValue }) => {
    const toastId = toast.loading('Verificando...');
    try {
      const { data } = await axios.post(`${rootUrl}/tenant`, credentials);
      toast.update(toastId, { isLoading: false, render: 'Registrado com sucesso!', type: 'success', autoClose: 3000 });
      return data; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.update(toastId, { isLoading: false, render: 'Algo deu errado com o cadastro', type: 'error', autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message: 'Unknown error' }); 
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    status: 'idle',
  } as registerState,
  reducers: {
    logOut: (state) => {
      state.status = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerTenant.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerTenant.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(registerTenant.rejected, (state) => {
        state.status = 'failed';
        
      });
  }
});

export const { logOut } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;