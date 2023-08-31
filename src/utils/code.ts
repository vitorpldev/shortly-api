export function generateCode(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const code = Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');

  return code;
}

console.log(generateCode(4).toLocaleUpperCase());
