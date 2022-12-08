# README

## Setup
Build project:
```
- yarn
- yarn build
- yarn build:watch
```

## Setup database
Configure database in file `src/config/index.ts`.
Then migrate database structure:
```
- yarn migration:run
```
Import records by execute the file `fake_data/zuju.sql`


## Start project:
```
- yarn start
- yarn start:watch (using nodemon)
```

## Test:
```
- yarn test
```

## Postman collection:
```
https://api.postman.com/collections/3254527-2ecff161-2136-4ed0-803c-29e97b830ab6?access_key=PMAT-01GKRBXBWK5XRVJMCRFBHV7DYB

Variable:
ZUJU_API_HOST = localhost:8000
```

## Documents
Database design and endpoint documents can be found in `docs` folder
