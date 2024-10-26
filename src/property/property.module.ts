import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './controllers/property/property.controller';
import { PropertyService } from './services/property/property.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports:[TypeOrmModule.forFeature([Property])],
  controllers: [PropertyController],
  providers: [PropertyService,{provide:APP_PIPE,useValue:new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    always:true
  })}]
})
export class PropertyModule {}
