import {mysql} from '../instances/mysql'
import { DataTypes, Model } from "sequelize"

interface productsInterface extends Model {
    id: number,
    title: string,
    description: string,
    price: number,
    quantity: number,
    photo:string
}

export const Products = mysql.define<productsInterface>('Products', {
    id: {
        primaryKey: true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DOUBLE
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    photo: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'products',
    timestamps: false
}

)