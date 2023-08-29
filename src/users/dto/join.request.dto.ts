import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
    @ApiProperty({
        example:'wonhyeok@gmail.com',
        description: '로그인에 필요한 이메일 정보',
        required:true
    })
    public email: string;

    @ApiProperty({
        example:'wonhyeok',
        description: '닉네임 정보',
        required:true
    })
    public nickname: string;

    @ApiProperty({
        example:'123456789',
        description: '비밀번호',
        required:true
    })
    public password: string;
}