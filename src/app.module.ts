import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobUrlModule } from './modules/job-url/job-url.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
    UsersModule,
    JobUrlModule
  ],
})
export class AppModule {}
