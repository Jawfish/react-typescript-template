FROM node:24-alpine

RUN apk add --no-cache bash curl

RUN curl -fsSL https://viteplus.dev/install.sh | bash
ENV PATH="/root/.vite-plus/bin:${PATH}"

WORKDIR /app

COPY package.json ./

RUN vp install

COPY . .

EXPOSE 5173

CMD ["vp", "dev", "--host"]
