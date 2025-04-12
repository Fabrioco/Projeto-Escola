import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SigninAuthDto } from "./dto/signin-auth";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  login(@Body() SigninAuthDto: SigninAuthDto) {
    return this.authService.signIn(SigninAuthDto);
  }

  @Get("me")
  @UseGuards(AuthGuard)
  async findUser(@Request() req) {
    const user = req.user;
    return this.authService.findUserByRoleAndId({ role: user.role, id: user.id });
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
}
