// import 'src/boilerplate.polyfill';
import { SnakeNamingStrategy } from 'src/common/snake-naming.strategy';
import config from 'src/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

let entities: any = [__dirname + '/../mysql/**/*.entity{.ts,.js}'];

let migrations: any = [__dirname + '/../migrations/*{.ts,.js}'];
const subscribers = [];

if ((module as any).hot) {
  const entityContext = (require as any).context('../mysql', true, /\.entity\.ts$/);

  entities = entityContext.keys().map((id) => {
    const entityModule = entityContext(id);
    const [entity] = Object.values(entityModule);
    return entity;
  });

  const migrationContext = (require as any).context('../migrations', false, /\.ts$/);

  migrations = migrationContext.keys().map((id) => {
    const migrationModule = migrationContext(id);
    const [migration] = Object.values(migrationModule);
    return migration;
  });
}

const typeormConfigs: TypeOrmModuleOptions = {
  entities,
  migrations,
  keepConnectionAlive: true,
  type: config.DB_TYPE as any,
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  subscribers,
  migrationsRun: false,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTransactionMode: 'each',
};

export default typeormConfigs;
