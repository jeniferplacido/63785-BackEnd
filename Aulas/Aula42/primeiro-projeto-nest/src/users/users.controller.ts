import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if(!createUserDto.primeiro_nome || !createUserDto.email || !createUserDto.senha) throw new HttpException('Nome é obrigatório', HttpStatus.BAD_REQUEST);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query) {
    const {limit} = query;
    console.log(limit);
    const users = this.usersService.findAll();
    return {status: "sucesso", users};

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if(isNaN(+id)) throw new HttpException('Id deve ser um número', HttpStatus.BAD_REQUEST);
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
