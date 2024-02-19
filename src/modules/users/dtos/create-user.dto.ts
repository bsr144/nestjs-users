import { Transform } from 'class-transformer';
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Transform(({ value }) => value.trim())
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
