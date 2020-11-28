import { scrpyt, randomBytes } from "crytpo";
import { promisify } from "util";

const scryptAsync = promisify(scrpyt);

export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString("hex")}.${salt}`;
  }

  static compare(storedPassword: string, suppliedPassword: string) {}
}
