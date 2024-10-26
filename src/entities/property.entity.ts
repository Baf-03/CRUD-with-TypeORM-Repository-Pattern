import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//entity is similar to the schema in mongoDb


@Entity()
export class Property{

    @PrimaryGeneratedColumn()
    id:number;

    @Column() //it indicates that it is going to be a field inside our property table
    name:string;

    @Column() //it indicates that it is going to be a field inside our property table i think it is similar to the @prop thing in nestjs monggose remember 
    description:string;

    @Column({default:0})
    price:number;
}


