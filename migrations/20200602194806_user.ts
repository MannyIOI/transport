import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.createTable("users", table => {
            table.uuid("id").primary();
            table.string("first_name");
            table.string("last_name");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ]);
}


export async function down(knex: Knex): Promise<any> {
    return Promise.all([knex.schema.dropTable("users")])
}

