/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories', // Tabela de refefência
        key: 'id', // Coluna de referência
      },
      onUpdate: 'CASCADE', // quando um id da tabela de categories sofrer modificação, ele vai atualizar na tabela de produtos (na referencia)
      onDelete: 'SET NULL', // quando um id em categories for deletado, ele vai ficar nulo em outras tabelas
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('products', 'category_id');
  },
};
