import { DataTypes } from "sequelize";
import db from "../db/connection";

const categoria = db.define('categoria', {
 
    nombre : {
      type: DataTypes.STRING,
    },

    descripcion: {
      type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    ruta: {
        type: DataTypes.STRING
    },
    
  },
  
  {
    tableName: 'categoria'
  })
   
  export default categoria;