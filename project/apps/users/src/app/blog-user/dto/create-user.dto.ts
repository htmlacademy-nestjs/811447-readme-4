import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { AuthUserMessage, PasswordLength } from '../../auth/auth.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({}, { message: AuthUserMessage.NotValidEmail })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  @MinLength(PasswordLength.Min)
  @MaxLength(PasswordLength.Max)
  @IsString()
  public password: string;
}
