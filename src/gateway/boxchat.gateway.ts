import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import {Server} from 'socket.io'
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway(3001,{
    cors: true
})
export class BoxchatGateWay implements OnModuleInit {
    @WebSocketServer()
    server: Server
    
    onModuleInit() {
        this.server.on('connection', (socket) => {

            const token = socket.handshake.auth.token;
            //console.log("Token của người dùng vừa kết nối:", token);

            if(token == undefined) {
                socket.emit("status", "Người dùng chưa được xác thực!")
                //socket.disconnect();
            }

            console.log("socketid của user vừa login", socket.id)

            socket.on('disconnect', () => {
                console.log("vừa logout")
                this.server.emit("loadMessage", `Tam biệt user có socketid là: ${socket.id}`)
            });
        })
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any) {
        console.log("body", body)
        this.server.emit("loadMessage", body)
    }
}