import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  private users = []


  findAll() {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    
    this.users.push({
      ...createUserDto,
      id: this.users.length + 1
    });
    return createUserDto;
  }


  findOne(id: number) {
    const taskFound = this.users.find(user => user.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`)

    }
    return taskFound
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
