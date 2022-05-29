import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobUrlController } from './job-url.controller';
import { JobUrlService } from './job-url.service';
import { JobUrl, JobUrlSchema } from './models/job-url.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: JobUrl.name, schema: JobUrlSchema }])],
    controllers: [JobUrlController],
    providers: [JobUrlService],
    exports: [JobUrlService]
})
export class JobUrlModule {}
