import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

@Controller('api/users')
export class UsersController {
    constructor(private usersService : UsersService) {
        
    }
    // [GET] users/
    @ApiResponse({
        status:200,
        description: "성공",
        type:UserDto
    })
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    // [POST] users/
    @ApiOperation({summary:'회원가입'})
    @Post()
    postUsers(@Body() data : JoinRequestDto) {
        this.usersService.postUsers(data);
    }

    // [POST] users/login
    @Post('login')
    login() {

    }
    // [POST] users/logout
    @Post('logout')
    logOut(@Req() req,@Res() res) {

    }
}
