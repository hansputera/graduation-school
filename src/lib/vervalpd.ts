import { tmpdir } from 'os';
import { join } from 'path';
import { VervalPd } from 'vervalpd-node';
import { CookieFileConsumer } from 'vervalpd-node/dist/cookie-file-consumer';

export const vervalpd = new VervalPd(
  {
    email: process.env.VERVAL_EMAIL!,
    password: process.env.VERVAL_PASSWORD!,
  },
  {
    cookieInstance: new CookieFileConsumer(join(tmpdir(), 'vervalpd-cookies')),
  },
);
