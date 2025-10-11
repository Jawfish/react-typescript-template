dev:
    docker compose up -d

down:
    docker compose down

lint:
    bun lint

fix:
    bun fix && bun tsc

test:
    bun test

coverage:
    bun coverage
