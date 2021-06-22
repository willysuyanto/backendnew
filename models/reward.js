module.exports = (sequelize, Sequelize) => {
    const Reward = sequelize.define("reward", {
      nama_reward: {
        type: Sequelize.STRING
      },
      harga_jual: {
        type: Sequelize.INTEGER
      },
      jumlah_reward: {
        type: Sequelize.INTEGER
      }
    });
  
    return Reward;
  };