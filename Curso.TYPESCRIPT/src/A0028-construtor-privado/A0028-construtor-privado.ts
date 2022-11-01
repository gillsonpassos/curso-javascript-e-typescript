// Singleton - Gof  | Factory Method - Gof
export class Database {
  // eslint-disable-next-line prettier/prettier
  private static database: Database;

  // eslint-disable-next-line prettier/prettier
  private constructor(
    // eslint-disable-next-line prettier/prettier
    private host: string,
    private user: string,
    private password: string,
    ) {}

    connect(): void {
      console.log(`Conectado: ${this.host},${this.user},${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string): Database {
      if (Database.database) {
        console.log('Retornando instancia já criada.');
        return Database.database
      }
      console.log('Criando nova instancia.');
      Database.database = new Database(host, user, password)
      return Database.database;

    }
  }



const db1 = Database.getDatabase('localhost', 'hoot', '123456');
 db1.connect();

 const db2 = Database.getDatabase('localhost', 'hoot', '123456');
 db2.connect();

 const db3 = Database.getDatabase('localhost', 'hoot', '123456');
 db3.connect();

 const db4 = Database.getDatabase('localhost', 'hoot', '123456');
 db4.connect();

 const db5 = Database.getDatabase('localhost', 'hoot', '123456');
 db5.connect();
