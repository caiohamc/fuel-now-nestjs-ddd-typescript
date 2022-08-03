import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GasStationService } from '../../../../application/gas-station/appservices/gas-station.service';
import { CreateGasStationDto } from '../dto/create-gas-station.dto';
import { UpdateGasStationDto } from '../dto/update-gas-station.dto';

@Controller('gas-station')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Post()
  create(@Body() createGasStationDto: CreateGasStationDto) {
    return this.gasStationService.create(createGasStationDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGasStationDto: UpdateGasStationDto) {
    return this.gasStationService.update(+id, updateGasStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gasStationService.remove(+id);
  }
}