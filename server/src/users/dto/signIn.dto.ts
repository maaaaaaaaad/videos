import { PartialType } from '@nestjs/mapped-types';
import { UserSignDataDto } from './userForm.dto';

class UserSignInDto extends PartialType(UserSignDataDto) {}

export default UserSignInDto;
