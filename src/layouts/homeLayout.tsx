import { Link, Outlet } from "react-router-dom";
const MENU = [
  {
    label: "websocket-webAPI",
    path: "/websocket/simple",
  },
  {
    label: "心跳检测",
    path: "/websocket/hearbeat",
  },
];
type MENU_ITEM = {
  label: string;
  path: string;
  children?: null | Array<MENU_ITEM>;
};
export default () => {
  console.log(MENU);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <h2>test main</h2>
      {MENU.map((item: MENU_ITEM) =>
        item.children ? null : (
          <div key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </div>
        )
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
