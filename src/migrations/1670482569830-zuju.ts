import { MigrationInterface, QueryRunner } from 'typeorm';

export class zuju1670482569830 implements MigrationInterface {
  name = 'zuju1670482569830';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`team\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`logo_url\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`player\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` char(36) NOT NULL, \`team_id\` char(36) NOT NULL, \`first_name\` varchar(36) NOT NULL, \`last_name\` varchar(36) NOT NULL, \`squad_number\` varchar(5) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`match\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` char(36) NOT NULL, \`home_team_id\` char(255) NOT NULL, \`away_team_id\` char(255) NOT NULL, \`date\` date NOT NULL, \`time\` time NOT NULL, \`duration\` char(10) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`goal\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` char(36) NOT NULL, \`match_id\` char(36) NOT NULL, \`player_id\` char(36) NOT NULL, \`minute\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`tournament\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`player\` ADD CONSTRAINT \`FK_9deb77a11ad43ce17975f13dc85\` FOREIGN KEY (\`team_id\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`match\` ADD CONSTRAINT \`FK_0ff90eb8a8a558b9e7d26e5e8b5\` FOREIGN KEY (\`home_team_id\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`match\` ADD CONSTRAINT \`FK_f6b92d7af929d55558a67fd7bcd\` FOREIGN KEY (\`away_team_id\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`goal\` ADD CONSTRAINT \`FK_ef6a93a323ff1b3682e767e4a6b\` FOREIGN KEY (\`match_id\`) REFERENCES \`match\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`goal\` ADD CONSTRAINT \`FK_6d590a9c19665bbf2427b56a18c\` FOREIGN KEY (\`player_id\`) REFERENCES \`player\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`goal\` DROP FOREIGN KEY \`FK_6d590a9c19665bbf2427b56a18c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`goal\` DROP FOREIGN KEY \`FK_ef6a93a323ff1b3682e767e4a6b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`match\` DROP FOREIGN KEY \`FK_f6b92d7af929d55558a67fd7bcd\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`match\` DROP FOREIGN KEY \`FK_0ff90eb8a8a558b9e7d26e5e8b5\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`player\` DROP FOREIGN KEY \`FK_9deb77a11ad43ce17975f13dc85\``,
    );
    await queryRunner.query(`DROP TABLE \`tournament\``);
    await queryRunner.query(`DROP TABLE \`goal\``);
    await queryRunner.query(`DROP TABLE \`match\``);
    await queryRunner.query(`DROP TABLE \`player\``);
    await queryRunner.query(`DROP TABLE \`team\``);
  }
}
