import { ClientService } from "./client.service";
import { ClientDTO } from "./dto/client.dto";
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ClientMsg } from "src/common/constants";

@Controller()
export class ClientController {
    constructor(private readonly clientService: ClientService) { }

    @MessagePattern(ClientMsg.CREATE)
    create(@Payload() clientDTO: ClientDTO) {
        return this.clientService.create(clientDTO);
    }

    @MessagePattern(ClientMsg.FIND_ALL)
    findAll() {
        return this.clientService.findAll();
    }

    @MessagePattern(ClientMsg.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.clientService.findOne(id);
    }
    @MessagePattern(ClientMsg.UPDATE)
    update(@Payload() payload: any) {
        return this.clientService.update(payload.id, payload.clientDTO);
    }

    @MessagePattern(ClientMsg.DELETE)
    delete(@Payload() id: string) {
        return this.clientService.delete(id);
    }
}