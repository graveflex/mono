# syntax=docker/dockerfile:1.4
FROM node:21-bullseye

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/tsconfig/package.json packages/tsconfig/package.json
COPY packages/types/package.json packages/types/package.json

RUN pnpm install && pnpm rebuild esbuild

WORKDIR /app

COPY . .

EXPOSE 3000 3001 9229 9230

# 5) final command
CMD ["pnpm","dev:docker"]
