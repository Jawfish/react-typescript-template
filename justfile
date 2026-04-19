dev:
    docker compose up -d

down:
    docker compose down

lint:
    vp lint

fix:
    vp check --fix

test:
    vp test

coverage:
    vp run coverage
