module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'ifome',
  define:{
    timestamps: false, // createAt e updateAt
    underscored: true, // separado por underline
  }
};