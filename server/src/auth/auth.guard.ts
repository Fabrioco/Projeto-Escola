import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

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

      const requiredRoles = this.reflector.get<string[]>("roles", context.getHandler()) || this.reflector.get<string[]>("roles", context.getClass());

      if (requiredRoles && !requiredRoles.includes(payload.role)) {
        throw new ForbiddenException("Acesso negado: permissão insuficiente");
      }

      return true;
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw error;
      }
      throw new UnauthorizedException({
        message: "Token inválido ou expirado",
        error: error.message,
      });
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];

    if (!type || !token) {
      throw new UnauthorizedException("Formato de autorização inválido. Use: Bearer <token>");
    }

    return type === "Bearer" ? token : undefined;
  }
}
