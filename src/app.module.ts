import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GasStationModule } from './shared/nest_modules/gas_station.module';
import { UserModule } from './shared/nest_modules/user.module';

@Module({
  imports: [GasStationModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
