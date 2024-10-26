import { IS_LENGTH, IsInt, IsNotEmpty, IsPositive, IsString, Length, max, min } from "class-validator";


export class CreatePropertyDto{

    @IsString()
    @Length(2,100)
    name:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsInt()
    @IsPositive()
    price:number;

}