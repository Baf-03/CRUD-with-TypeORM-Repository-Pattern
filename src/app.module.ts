import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'db.config';
import { PropertyModule } from './property/property.module';

//TypeORM provides a powerful API for working with relational databases like PostgreSQL, MySQL, SQLite, and others. It offers developers an elegant way to handle complex database operations without writing low-level SQL queries.

//typeOrm offeres two ways of doing crud operations the first one is query builder and the second one is repository pattern 

//right now we are going to do using repository pattern 

//with repository pattern typeOrm will create a repository class for each entity that we create for our database schema and with that repository we can do crud operations 
//repository pattern provides powerful api that provides doing simple and also complex crud operations 


@Module({
  imports: [TypeOrmModule.forRoot(pgConfig), PropertyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
