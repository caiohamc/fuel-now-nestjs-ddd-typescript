import { Module } from '@nestjs/common';
import { UserService } from '../../application/user/appservices/user.service';
import { UserController } from '../../adapter/api/user/user.controller';
import { UserQueryController } from '../../adapter/api/user/user-query.controller';

@Module({
  controllers: [UserController, UserQueryController], 
  providers: [UserService] 
})
export class UserModule {}
