import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

  constructor(
    private prisma : PrismaService
  ){}

  findAll() {
    return this.prisma.user.findMany();
  }

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    
    return this.prisma.user.create({
      data: createUserDto
    })
  }


  findOne(id: string) {
    const user = this.prisma.user.findUnique({
      where: {
        id
      }
    });

    if(!user){
      new NotFoundException(`User with id ${id} not found`);
    }
    
    return user;
     
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
