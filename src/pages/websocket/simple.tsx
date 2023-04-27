/**
 * 原生webAPI实现websocket
 */
import { notification } from "antd";
import { useState, useEffect } from "react";
export default () => {
  const [data, setData] = useState<any>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const handleClick = () => {
    // 这里使用原生html websocket api
    const ws = new WebSocket("ws://localhost:3001");
    ws.onclose = () => {
      notification.info({ message: "socket连接关闭" });
    };

    // 只监听连接时的报错
    ws.onerror = (e) => {
      notification.error({ message: "连接错误" });
    };
    ws.onopen = () => {
      notification.success({ message: "socket连接成功" });
      setSocket(ws);
    };
    ws.onmessage = (message: MessageEvent) => {
      setData((prev: any[]) => prev.concat(message.data));
    };
  };

  const sendInfo = () => {
    const dom = document.getElementById("info") as HTMLInputElement;
    let input = dom.value;
    socket?.send(input);
  };

  return (
    <>
      <div>websocket</div>
      <div>
        <button className="btn" type="button" onClick={handleClick}>
          连接websocket服务
        </button>
        <button
          className="btn-blue"
          type="button"
          onClick={() => {
            socket?.close(1000, "客户端主动关闭");
          }}
        >
          关闭websocket服务
        </button>
      </div>

      <div>
        <label htmlFor="info">发送给服务端的消息</label>
        <input type="text" id="info"></input>
        <button type="button" onClick={sendInfo}>
          发送
        </button>
      </div>

      <div>
        <p>收到的来自服务端发送的信息:</p>
        {data.map(
          (item: string, index: number) =>
            typeof item === "string" && <div key="index">{item}</div>
        )}
      </div>
      <div></div>
    </>
  );
};
