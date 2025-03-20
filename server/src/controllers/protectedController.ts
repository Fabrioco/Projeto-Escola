import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthConfig } from "../config/authConfig";
import Coordinator from "../models/coordinatorModel";
import { Request, Response } from "express";

class ProtectedController {
  async verifyCoordinator(req: Request, res: Response) {
    // Extrai o token do cabeçalho Authorization
    const token = req.headers.authorization?.split(" ")[1];

    // Verifica se o token foi recebido
    if (!token) {
      return res.status(401).json({ error: "Token não recebido" });
    }

    try {
      // Verifica e decodifica o token
      const decoded = jwt.verify(token, AuthConfig.secret) as JwtPayload;

      // Busca o coordenador no banco de dados usando o ID do token
      const coordinator = await Coordinator.findOne({
        where: { id: decoded.id },
      });

      // Verifica se o coordenador foi encontrado
      if (!coordinator) {
        return res.status(404).json({ error: "Coordenador não encontrado" });
      }

      // Retorna os dados do coordenador
      return res.status(200).json(coordinator);
    } catch (error) {
      // Trata erros (token inválido, expirado, etc.)
      return res.status(401).json({ error: "Token inválido ou expirado" });
    }
  }
}

export default new ProtectedController();
