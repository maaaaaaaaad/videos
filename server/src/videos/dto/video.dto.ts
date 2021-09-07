import { ValidateNested, IsString } from 'class-validator';

export class VideoDto {
  @ValidateNested()
  video: Express.Multer.File | null;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  theme: string;

  @IsString()
  age_verification: string;
}
