import { IsNotEmpty } from "class-validator";

export class CreateMenetrendDto {
    @IsNotEmpty()
    from: string;
    @IsNotEmpty()
    to: string;
    @IsNotEmpty()
    time: string;
}
