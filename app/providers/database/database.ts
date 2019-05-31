import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');

  }
  
  public getDB() {
    return SQLite.create({
      name: 'radios.db',
      location: 'default'
    });
  }

  public async createDatabase() {
    try {
      const db = await this.getDB();
      this.createTables(db);
      this.insertDefaultItems(db);
    }
    catch (e) {
      return console.log(e);
    }
  }

  private createTables(db: SQLiteObject) {

    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS radios (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, url TEXT, thumb TEXT)']
    ])
      .then(() => console.log('tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from radios')
      .then((data: any) => {

        if (data.rows.item(0).qtd == 0) {
          db.sqlBatch([
            ['insert into radios (name,url,thumb) values (?,?,?)', ['radio 1', 'url de teste 1', 'thumb 1']],
            ['insert into radios (name,url,thumb) values (?,?,?)', ['radio 2', 'url de teste 2', 'thumb 2']]
          ])
            .then(() => console.log('Dados default incluídos com sucesso!'))
            .catch(e => console.error('Erro ao incluir os dados default', e));
        }
      })
      .catch(e => console.error('Erro ao consultar a qtd de radios', e));
  }
}
