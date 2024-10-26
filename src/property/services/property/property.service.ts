import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { CreatePropertyDto } from 'src/property/dtos/createProperty.dto';
import { UpdatePropertyDto } from 'src/property/dtos/updateProperty.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {


    constructor(@InjectRepository(Property) private propertyRepo:Repository<Property>){}

    async create(dto:CreatePropertyDto){
        return await this.propertyRepo.save(dto)
    }


    async findOne(id:number){
       const result = await this.propertyRepo.findOne({
        where:{
            id
        }
       })
       if(!result){
        throw new NotFoundException("unable to find result for that id!")
       }
       return result 
    }


    async findAll(){
        return this.propertyRepo.find()
    }

    async update(id:number,dto:UpdatePropertyDto){
       return await this.propertyRepo.update({id},dto);
    }


    async delete(id:number){
        return await this.propertyRepo.delete({id})
    }
}
