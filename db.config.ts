import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions ={
    url:"",
    type:"postgres",
    port:3306,
    // entities:[Propery], //ab is tarha manually krna ajeeb lambe tareeka hoga for example kal 20 enities ajain tou that would be messy to os sae acha neechae wala tarreeeka hae 
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //__dirname is a gobal variable which represents the absolute directory path of currently executing file 

    synchronize:true,//this will automatically update our database schema based on our entity definitions so it great option in development but hightly discourged in production 
    logging: true,
}