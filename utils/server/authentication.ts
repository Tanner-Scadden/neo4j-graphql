import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';
import crypto from 'crypto';

function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compareSync(password, hashedPassword);
}

function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

function createHash(email: string) {
  const oneWeekAway = dayjs().add(1, 'week');

  const code = email + oneWeekAway.toISOString();
  const hash = crypto.createHash('md5').update(code).digest('hex');

  return {
    hash,
    timeout: dayjs().add(30, 'minutes').format(),
  };
}

function checkValidResetPassword(resetTimeout: Date) {
  return dayjs().isBefore(resetTimeout);
}

const authenticationModule = {
  hashPassword,
  verifyPassword,
  createHash,
  checkValidResetPassword,
};

export default authenticationModule;
