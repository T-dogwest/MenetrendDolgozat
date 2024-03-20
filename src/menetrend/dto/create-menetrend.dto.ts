import { IsNotEmpty } from "class-validator";

export class CreateMenetrendDto {
    @IsNotEmpty({message:"Nem lehet üres az indulási hely"})
    from: string;
    @IsNotEmpty({message:"Nem lehet üres az érkezési hely"})
    to: string;
    @IsNotEmpty({message:"Nem lehet üres a menetidő"})
    time: string;
    @IsNotEmpty({message:"Nem lehet üres az indulási idő"})
    start:string;
}
