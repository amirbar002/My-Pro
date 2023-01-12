import db from "../db";

export default class Customer {
  constructor(
    private id: string,
    private dataFrom: string,
    private dataTo: string,
    private Description: string,
    private Room: number | undefined
  ) {}

  async save(): Promise<any> {
    const query = `
        insert into customers_meeting( id , data_from_meeting , data_To, description, Room)
        value ('${this.id}','${this.dataFrom}','${this.dataTo}','${this.Description}', ${this.Room})
    `;

    return await db.execute(query);
  }

  static async find(id?: string): Promise<any> {
    const query = `
        select * from customers_meeting ${id ? `where id = ${id}` : ""}
    `;
    return db.execute(query);
  }

  async update(id: string): Promise<any> {
    const setStatement = `
        ${this.dataFrom ? `first_name = '${this.dataFrom}',` : ""}
        ${this.dataTo ? `last_name = '${this.dataTo}',` : ""}
        ${this.Description ? ` Description = '${this.Description}',` : ""}
        ${this.Room ? `Room = '${this.Room}'` : ""}
    `
      .trim()
      .replace(/,$/, "");

    const query = `update customers set
    ${setStatement}
    where id = ${id}`;

    return await db.execute(query);
  }

  static async delete(id: string): Promise<any> {
    const query = `
    delete from customers
    where id = ${id}
    `;

    return await db.execute(query);
  }
}
