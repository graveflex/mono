import { routing } from '@mono/web/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing);

// export { auth as middleware } from "@mono/web/auth"

export const config = {
  matcher: ['/((?!api|admin|_next|_vercel(?!/insights/script\\.js)|.*\\..*).*)']
};
