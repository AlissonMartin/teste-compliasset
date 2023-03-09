import { Request, Response } from "express"
import { Products } from "../models/product"
import sharp from 'sharp'
import fs from 'fs'

export const getProductsList = async (req:Request, res:Response)=> {
    const productsList = await Products.findAll()
    res.status(200).json({productsList})
}

export const getProduct = async (req:Request, res:Response)=> {
    const id = req.params.id

    const product = await Products.findByPk(id)

    if (!product) {
        return res.status(404).json('Product not found')
    }

    res.status(200).json(product)
}

export const addProduct = async (req:Request, res:Response)=> {
    const title = req.body.title
    const description = req.body.desc
    const price = req.body.price
    const quantity = req.body.quantity
    const photo = req.file
    let filename = ''

    if (photo) {
        filename = `${photo.fieldname}-${Math.floor(Math.random() * 99999)}.jpg`
        await sharp(photo.buffer).resize(600).toFile(`./public/${filename}`)
    }

    const newProduct = new Products()

    newProduct.title = title
    newProduct.description = description
    newProduct.price = parseFloat(price)
    newProduct.quantity = parseInt(quantity)
    newProduct.photo = filename

    newProduct.save()

    res.status(200).json('Product successfully created')
}

export const deleteProduct = async (req:Request, res:Response)=> {
    const id = req.params.id 

    const product = await Products.findByPk(id)
    if (!product) {
        return res.status(404).json('Product not found')
    }
    product.destroy()

    res.status(200).json('Product successfully deleted')
}

export const editProduct = async (req:Request, res:Response)=> {
    const id = req.body.id
    const title = req.body.title
    const description = req.body.desc
    const price = req.body.price
    const quantity = req.body.quantity
    const photo = req.file
    let filename = ''

    const product = await Products.findByPk(id)

    if (photo) {
        filename = `${photo.fieldname}-${Math.floor(Math.random() * 99999)}.jpg`
        await sharp(photo.buffer).resize(600).toFile(`./public/${filename}`)
        fs.unlink(`./public/${product?.photo}`, (err)=> {
            if (err) throw err
        })    
    
    }


    if (!product) {
        return res.status(404).json('Product not found')
    }

    if (title) {
        product.title = title
    }

    if (description) {
        product.description = description
    }
    if (description) {
        product.price = parseFloat(price)
    }
    if (description) {
        product.quantity = parseInt(quantity)
    }

    if (filename) {
        product.photo = filename
    }

    product.save()

    res.status(200).json('Successfully updated')
}