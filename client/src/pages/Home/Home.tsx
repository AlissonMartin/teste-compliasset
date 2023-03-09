import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container'
import Header from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { deleteProduct, getProducts } from '../../services/api'
import { ItemDescription, ProductsItem, ProductsWrapper,} from './HomeElements'

const Home = () => {
  const navigate = useNavigate()

  const [products, setProducts] = useState<any[]>([])

  useEffect(()=> {
    const listProducts = async ()=>{
      const json = await getProducts()
      setProducts(json.productsList)
    }
    listProducts()
  },[])

  const handleDelete = async (id:number)=> {
    const json = await deleteProduct(id)
    navigate(0)
  }

  return (
    <>
      <Header/>
      <Container>
        <Title>Os melhores calçados e tênis você encontra aqui!</Title>
        <ProductsWrapper>
          {products.map((i, k)=>
            <ProductsItem style={{backgroundImage: `url(http://localhost:5000/public/${i.photo})`}} key={k}>
            <ItemDescription>
              <h3>{i.title}</h3>
              <p>{i.description}</p>
              <p>R$ {i.price} / produtos restantes: {i.quantity}</p>
              <button className='editButton' onClick={()=> {navigate(`/product/${i.id}`)}}>Editar produto</button>
            </ItemDescription>
            <button className='deleteButton' onClick={()=> {handleDelete(i.id)}}>x</button>
          </ProductsItem>
          )}
        </ProductsWrapper>
      </Container>
    </>
  )
}

export default Home