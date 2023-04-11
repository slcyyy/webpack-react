import { WebSocketServer } from "ws";
// const { WebSocketServer } = require("ws");
// 创建 WebSocket 服务器 监听在 3001 端口
const ws = new WebSocketServer({
  port: 3001,
});

//如果有WebSocket请求接入，ws对象可以响应connection事件来处理这个WebSocket
ws.on("connection", (ws, req) => {
  const clientAddress = req.socket.remoteAddress;
  console.log("有用户进行连接:", clientAddress);
  ws.on("error", console.error);

  // 接收客户端信息并把信息返回发送
  ws.on("message", (message, isBinary) => {
    console.log("received: %s", message, isBinary);
    // send 方法的第二个参数是一个错误回调函数
    ws.send(message.toString(), (err) => {
      if (err) {
        console.log(`[SERVER] error: ${err}`);
      }
    });
  });

  ws.on("close", (code, reason) => {
    console.log("关闭连接", code, reason);
  });
});
console.log("websocket server start");
