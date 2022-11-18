import sha256 from 'crypto-js/sha256';

// Function to hash a password
export function hash(password: string) {
  return sha256(password).toString();
}

// Function to compare a hashed password with a plaintext password
export function verifyHash(password: string, hashedPassword: string) {
  const newHashedPassword = sha256(password).toString();
  return newHashedPassword === hashedPassword;
}
