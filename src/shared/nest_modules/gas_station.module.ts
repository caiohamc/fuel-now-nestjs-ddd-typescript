import { Module } from '@nestjs/common';
import { GasStationService } from '../../application/gas-station/appservices/gas-station.service';
import { GasStationController } from '../../adapter/api/gas-station/gas-station.controller';
import { GasStationQueryController } from '../../adapter/api/gas-station/gas-station-query.controller';

@Module({
  controllers: [GasStationController, GasStationQueryController],
  providers: [GasStationService]
})
export class GasStationModule {}
