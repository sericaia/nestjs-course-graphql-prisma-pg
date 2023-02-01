Nest.js GraphQL course using Prisma ORM with Postgres
## Description

Based on [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. I'm using Prisma instead of typeorm, decided to share as it might be useful to someone. 

Only for learning purposes.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# start the postgres db with docker
$ docker-compose up

# apply db migrations (check src/migrations for details)
$ pnpm prisma migrate dev

# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# stop the db
$ docker-compose down
```


## Additional warning

Never commit your `.env` and `.docker-compose.yml` files to git with real creds. This was used for learning purposes only.


## License

Nest is [MIT licensed](LICENSE).
