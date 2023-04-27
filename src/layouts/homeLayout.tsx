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
    <div className="flex">
      <div className="menu">
        {MENU.map((item: MENU_ITEM) =>
          item.children ? null : (
            <div key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </div>
          )
        )}
      </div>

      <div>
        <div className="bg-red filter-grayscale">banana</div>
        <Outlet />
      </div>
    </div>
  );
};
