import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientSchema } from './schema/client.schema';
import { CLIENT } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientController } from './client.controller';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: CLIENT.name,
                useFactory: () => ClientSchema,
            },
        ]),
    ],
    controllers: [ClientController],
    providers: [ClientService],
})
export class ClientModule { }