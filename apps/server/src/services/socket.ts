import { Server } from "socket.io";
import Redis from "ioredis";

const pub = new Redis({
  host: "redis-26622aac-bunny-27cf.a.aivencloud.com",
  port: 20530,
  username: "default",
  password: "AVNS_V6bpHDfqpsuubfLa3DS",
});

const sub = new Redis({
  host: "redis-26622aac-bunny-27cf.a.aivencloud.com",
  port: 20530,
  username: "default",
  password: "AVNS_V6bpHDfqpsuubfLa3DS",
});

class SocketService {
  private _io: Server;

  constructor() {
    console.log("Init Server Socket....");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }

  public initListeners() {
    const io = this.io;
    console.log("Init Socket Listeners...");
    io.on("connect", (socket) => {
      console.log(`New Socket Connected`, socket.id);

      socket.on("event: message", async ({ message }: { message: string }) => {
        console.log("New Message Rec.", message);
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
