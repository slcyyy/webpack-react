import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/utils/request/http";

interface User {
  id: string;
  name: string;
  email: string;
  sex: string;
}

const initialState = {
  users: [] as User[],
  status: "loading",
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // 处理调用异步action的结果（extraReducers也可以处理来自其他模块的action,自定义编写reducer更新这一模块的数据）
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeed";
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

// createAsyncThunk创建异步的action
// 获取用户列表
export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const res = await http.get("/users");
  return res.data;
});

// 新增用户
export const addUser = createAsyncThunk("addUser", async (params: User) => {
  const res = await http.post("/users", params);
  return res.data;
});

// 提供给useSelector使用，遍于userStore中的数据
export const selectUsersData = (state: any) => state.users;
export default userSlice.reducer; // !😺.reducer，并非是reducers
