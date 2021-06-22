const db = require("../models");
const Reward = db.rewards;
const Op = db.Sequelize.Op;

exports.buatBaru = (req, res) => {
    if (!req.body.nama_reward) {
        res.status(400).send({
          message: "Nama Reward Tidak Boleh Kosong"
        });
        return;
      }
    
      const reward = {
        nama_reward: req.body.nama_reward,
        harga_jual:req.body.harga_jual,
        jumlah_reward: req.body.jumlah_reward
      };
    
      Reward.create(reward)
        .then(data => {
          res.send({
              message: "berhasil input data reward!",
              data:data
          });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Terjadi Kesalahan Saat Memasukkan data"
          });
        });
};

exports.cariSemua = (req, res) => {
    const search = req.query.search;
    console.log("inititel",search);
    var kondisi = search ? { nama_reward: { [Op.like]: `%${search}%` } } : null;
  
    Reward.findAll({ where: kondisi })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.cariSatu = (req, res) => {
    console.log("ini parameter", req.params);
    const id = req.params.id;
    console.log("ini id", id);
    Reward.findByPk(id).then(data=>{
        if(!data){
            res.status(404).send({
                message: "Data Dengan Id "+id+" tidak ditemukan"
            });
        } else{
            res.send(data);
        }
    }).catch(error => {
        res.send(error.message);
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Reward.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Reward Berhasil Diupdate.",
            data: req.body
          });
        } else {
          res.send({
            message: `Tidak Dapat Update Data`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error update data dengan id=" + id
        });
      });
};

exports.hapusSatu = (req, res) => {
  const id = req.params.id;

  Reward.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Reward Berhasil Dihapus!"
        });
      } else {
        res.send({
          message: `Data Tidak Ditemukan`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Tidak Dapat menghapus Reward dengan id=" + id
      });
    });
  
};

exports.hapusSemua = (req, res) => {
    Reward.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: nums + " Reward dihapus!" });
        })
        .catch(err => {
          res.status(500).send({
              message:
              err.message || "Terjadi Kesalahan saat menghapus semua Reward"
            });
        });
};

