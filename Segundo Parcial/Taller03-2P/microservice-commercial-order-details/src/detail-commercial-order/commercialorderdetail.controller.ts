import { CODetailService } from "./commercialorderdetail.service";
import { DetailDTO } from "./dto/commercialorderdetail.dto";
import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DetailMsg } from "src/common/constants";


@Controller()
export class CODetailController {
    constructor(private readonly codetailService: CODetailService) { }

    @MessagePattern(DetailMsg.CREATE)
    create(@Payload() detailDTO: DetailDTO) {
        return this.codetailService.create(detailDTO);
    }

    @MessagePattern(DetailMsg.FIND_ALL)
    findAll() {
        return this.codetailService.findAll();
    }

    @MessagePattern(DetailMsg.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.codetailService.findOne(id);
    }
    @MessagePattern(DetailMsg.UPDATE)
    update(@Payload() payload: any) {
        return this.codetailService.update(payload.id, payload.detailDTO);
    }

    @MessagePattern(DetailMsg.DELETE)
    delete(@Payload() id: string) {
        return this.codetailService.delete(id);
    }
}

