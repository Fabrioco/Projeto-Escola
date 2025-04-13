import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";

interface AuthenticatedUser {
  role: string;
  }

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>("roles", [context.getHandler(), context.getClass()]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as AuthenticatedUser;

    if (!user) {
      throw new ForbiddenException("Usuário não autenticado");
    }

    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException(`Acesso negado. Requerida uma das seguintes roles: ${requiredRoles.join(", ")}`);
    }

    return true;
  }
}
