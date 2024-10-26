import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreatePropertyDto } from 'src/property/dtos/createProperty.dto';
import { UpdatePropertyDto } from 'src/property/dtos/updateProperty.dto';
import { PropertyService } from 'src/property/services/property/property.service';

@Controller('property')
export class PropertyController {
    constructor(private readonly propertyService:PropertyService){}

    @Post("/create")
    create(@Body() dto:CreatePropertyDto){
        return this.propertyService.create(dto)
    }


    @Get("/find/:id")
    findUser(
        @Param("id",ParseIntPipe) id:number
    ){
        return this.propertyService.findOne(id)
    }


    @Get("/findAll")
    findAll(){
        return this.propertyService.findAll()
    }

    @Patch("/:id")
    update(
        @Param("id",ParseIntPipe) id:number,
        @Body() dto:UpdatePropertyDto
    ){
        console.log(dto)
        if(Object.keys(dto).length===0){
            throw new HttpException("empty body",400)
        }
        return this.propertyService.update(id,dto)
    }

    @Delete("/:id")
    delete(
        @Param("id",ParseIntPipe) id:number
    ){
        return this.propertyService.delete(id)
    }

}
