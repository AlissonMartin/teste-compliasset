import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '../../components/Container'
import Header from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { editProduct, getProduct } from '../../services/api'
import { SubmitButton } from '../NewProduct/NewProductElements'
import { LeftSide, ProductWrapper, RightSide } from './EditProductElements'

const EditProduct = () => {
    const {id} = useParams()

    const fileFieldRef = useRef<any>(null)
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [productInfo, setProductInfo] = useState<any>({})

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const fData = new FormData()
        if (title !== '') {
          fData.append('title', title)
        }
        if (desc !== '') {
          fData.append('desc', desc)
        }
        if (price !== '') {
          fData.append('price', price)
        }
        if (quantity !== '') {
          fData.append('quantity', quantity)
        }
        if (fileFieldRef.current) {
          if (fileFieldRef.current?.files !== null) {
            fData.append('photo', fileFieldRef.current?.files[0])
          }
        }

        const productId = id?.toString()

        if (productId) {
            fData.append('id', productId)
        }

        const json = await editProduct(fData)
        navigate(0)
    }

    useEffect(()=> {
      const getProductInfo = async()=> {
        if (id) {
          const json = await getProduct(id)
          if (json){
            setProductInfo(json)
          }
        }
      }
      getProductInfo()
    },[])
    return (
        <>
            <Header />
            <Container>
              <Title>Edite o produto!</Title>
                <ProductWrapper>
                    <LeftSide>
                        <img src={`http://localhost:5000/public/${productInfo.photo}`} alt="" />
                    </LeftSide>
                    <RightSide>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="title">Título</label>
                            <input type="text" id='title' onChange={e => setTitle(e.target.value)} value={title}  placeholder={productInfo.title}/>
                            <label htmlFor="desc">Descrição</label>
                            <input type="text" id='desc' onChange={e => setDesc(e.target.value)} value={desc} placeholder={productInfo.description} />
                            <label htmlFor="price">Preço</label>
                            <input type="number" id='price' onChange={e => setPrice(e.target.value)} value={price}  placeholder={`R$ ${productInfo.price}`}/>
                            <label htmlFor="quantity">Quantidade</label>
                            <input type="number" id='quantity' onChange={e => setQuantity(e.target.value)} value={quantity}  placeholder={productInfo.quantity}/>
                            <label htmlFor="image">Foto do produto</label>
                            <input type="file" id='image'  />
                            <SubmitButton type="submit" value='Editar produto' />
                        </form>
                    </RightSide>
                </ProductWrapper>
            </Container>
        </>
    )
}

export default EditProduct