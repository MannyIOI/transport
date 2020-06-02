Commands

## KNEX

## to create migration files
knex migrations:make `MODEL_NAME` -x ts  

## to apply migrations locally
knex migrations:latest

## to apply migrations on production server
knex migration:latest --env production

## to rollback migrations locally
knex migrations:rollback

# to apply migrations on production server
knex migrations:rollback --env production

## NPM
<!-- For development purpose -->
yarn start:dev

<!-- For deployment -->
yarn start


<!-- add to package.json as script on deploy -->
"postinstall": "npm run build-ts",
