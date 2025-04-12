import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SigninAuthDto } from "./dto/signin-auth";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  login(@Body() SigninAuthDto: SigninAuthDto) {
    return this.authService.signIn(SigninAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
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
