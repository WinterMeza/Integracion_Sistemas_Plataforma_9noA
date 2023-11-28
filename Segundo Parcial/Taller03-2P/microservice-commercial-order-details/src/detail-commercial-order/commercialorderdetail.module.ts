import { Module } from '@nestjs/common';
import { CODetailService } from './commercialorderdetail.service';
import { CommercialOrderSchema } from './schema/commercialorderdetail.schema';
import { CODETAIL } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { CODetailController } from './commercialorderdetail.controller';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: CODETAIL.name,
                useFactory: () => CommercialOrderSchema,
            },
        ]),
    ],
    controllers: [CODetailController],
    providers: [CODetailService],
})
export class CODetailModule { }
