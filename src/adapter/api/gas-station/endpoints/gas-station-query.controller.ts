import { Controller, Get, Param } from '@nestjs/common';
import { GasStationService } from '../../../../application/gas-station/appservices/gas-station.service';

@Controller('gas-station')
export class GasStationQueryController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Get()
  findAll() {
    return this.gasStationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gasStationService.findOne(+id);
  }
}