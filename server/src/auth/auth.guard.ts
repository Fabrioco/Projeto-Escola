import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException("Token de autenticação não fornecido");
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);

      if (!payload || !payload.role) {
        throw new UnauthorizedException("Token inválido ou expirado");
      }

      request["user"] = payload;
    } catch (error) {
      throw new UnauthorizedException({
        message: "Token inválido ou expirado",
        error: error.message,
      });
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];

    if (!type || !token) {
      throw new UnauthorizedException("Formato de autorização inválido. Use: Bearer <token>");
    }

    return type === "Bearer" ? token : undefined;
  }
}
