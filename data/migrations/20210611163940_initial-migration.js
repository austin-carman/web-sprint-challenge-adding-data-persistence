
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name').notNullable()
        table.string('project_description')
        table.boolean('project_completed').defaultTo(0)
        
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name').notNullable()
        table.string('resource_description')
    })
    .createTable('tasks', table => {
        table.increments()
    })
    .createTable('project_resources', table => {
        table.increments()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
