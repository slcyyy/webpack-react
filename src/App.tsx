import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUsersData } from "./store/modules/user";
import { fetchUsers, addUser } from "@/store/modules/user";
import "@/main.css";
import { useAppDispatch } from "./store";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const usersData = useSelector(selectUsersData);
  const { users, status } = usersData;
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addUserEvent = async (e: any) => {
    // 防止页面刷新？
    e.preventDefault();

    const param = {
      id: nanoid(),
      name: username,
      email: email,
      sex: sex,
    };
    await dispatch(addUser(param));
    setUsername("");
    setEmail("");
    setSex("");
  };

  return (
    <>
      <h2>{status}</h2>
      <div>
        {users.map((item: any) => (
          <div>{item.name}</div>
        ))}
      </div>
      <form>
        <input
          name="username"
          placeholder="Please input username!"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          name="email"
          placeholder="Please input email!"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <select name="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="">请选择性别</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button onClick={addUserEvent}>提交</button>
      </form>
    </>
  );
}

export default App;
