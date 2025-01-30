import {IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator';

// Para las validaciones use Pipe y Decoradores de clase de la librería class-validator. En este caso, se valida que los campos name, email y password sean de tipo string.

// Para instalar class-validator, ejecute el siguiente comando:
// npm install class-validator class-transformer



export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;
  
  @IsNotEmpty()
  @IsNumber()
  password: number;
}
