const {Model, DataTypes}= require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");


class Book extends Model{
static initiate(sequelize){
    return Book.init({
        bookid:{ type: DataTypes.INTEGER, primaryKey:true},
        bookname:{type: DataTypes.STRING(40), allowNull:false},
        publisher:{type: DataTypes.STRING(40), allowNull:false},
        price:{type: DataTypes.INTEGER, allowNull:false},
    },{sequelize, modelName:"Book", tableName:"book", timestamps:false})
}
static associate(db){
    Book.hasMany(db.Order, {foreignKey:"bookid"})
}
}

module.exports = Book;