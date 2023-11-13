import { Module } from "@nestjs/common";
import { MyGateway } from "./gateway";
import { BoxchatGateWay } from "./boxchat.gateway";
@Module({
    providers: [MyGateway, BoxchatGateWay]
})
export class GatewayModule {}
