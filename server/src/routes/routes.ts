import { Router } from "express";
import multer, { FileFilterCallback } from "multer";
import * as productsController from '../controllers/productsController'

const router = Router()

const fileFilter = (req: any, file: Express.Multer.File, cb: FileFilterCallback): void => {
    if (file.mimetype.split("/")[0] === "image") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({storage: multer.memoryStorage(), fileFilter})

router.get('/products', productsController.getProductsList)
router.get('/product/:id', productsController.getProduct)
router.get('/delete/:id', productsController.deleteProduct)

router.post('/product', upload.single('photo'), productsController.addProduct)
router.put('/product', upload.single('photo'), productsController.editProduct)

export default router