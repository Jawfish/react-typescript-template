FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["bun", "dev", "--host"]
