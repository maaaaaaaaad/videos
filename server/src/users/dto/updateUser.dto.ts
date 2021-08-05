import { PartialType } from '@nestjs/mapped-types';
import { UserSignDataDto } from './userForm.dto';

class UpdateUserDataDto extends PartialType(UserSignDataDto) {}

export default UpdateUserDataDto;
