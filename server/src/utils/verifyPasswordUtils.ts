import bcrypt from "bcrypt";

export async function verifyPassword(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) {
    throw new Error("Senha incorreta");
  }
}
