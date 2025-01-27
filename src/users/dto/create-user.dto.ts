import { Transform } from "class-transformer";
import { IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    nombre?: string;

    @IsEmail()
    email: string;

    @IsString()
    @Transform(({ value }) => value.trim()) //limpia caracteres en blanco
    @MinLength(6)
    password: string;

    @IsString()
    @Transform(({ value }) => value.trim())
    tipoUsuario: string;

    @Transform(({ value }) => value.trim())
    apellido: string;
    
    @IsNumber()
    edad: number;

    @Transform(({ value }) => value.trim())
    direccion: string;

    @Transform(({ value }) => value.trim())
    rut: string;

    @Transform(({ value }) => value.trim())
    seguroMedico: string;
}
    

