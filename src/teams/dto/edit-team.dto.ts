// edit-team.dto.ts

import { IsString, MinLength } from 'class-validator';

export class EditTeamDto {
  @IsString()
  estado: string;
}