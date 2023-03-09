import React, { useRef, useState } from 'react'
import { Container } from '../../components/Container'
import Header from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { FormsArea, SubmitButton } from './NewProductElements'
import { addProduct } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../components/ErrorMessage'

const NewProduct = () => {

  const fileFieldRef = useRef<any>(null)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setError('')

    if (!title || !desc || !price || !quantity) {
      setError('Preencha todos os Campos')
      return
    }

    if (fileFieldRef.current?.files?.length === 0) {
      setError('Adicione ao menos uma foto')
      return
    }

    const fData = new FormData()
    fData.append('title', title)
    fData.append('desc', desc)
    fData.append('price', price)
    fData.append('quantity', quantity)
    fData.append('photo', fileFieldRef.current.files[0])

    const json = await addProduct(fData)
    navigate('/')

  }
  return (
    <>
      <Header/>
      <Container>
        <Title>Adicione um novo produto!</Title>
        <FormsArea>
          <form onSubmit={handleSubmit}>
            {error &&
              <ErrorMessage>{error}</ErrorMessage>
            }
            <label htmlFor="title">Título</label>
            <input type="text" id='title' onChange={e=> setTitle(e.target.value)} value={title} required/>
            <label htmlFor="desc">Descrição</label>
            <input type="text" id='desc'onChange={e=> setDesc(e.target.value)} value={desc} required/>
            <label htmlFor="price">Preço</label>
            <input type="number" id='price'onChange={e=> setPrice(e.target.value)} value={price} required/>
            <label htmlFor="quantity">Quantidade</label>
            <input type="number" id='quantity'onChange={e=> setQuantity(e.target.value)} value={quantity} required/>
            <label htmlFor="image">Foto do produto</label>
            <input type="file" id='image' required ref={fileFieldRef}/>
            <SubmitButton type="submit" value='Cadastrar produto'/>
          </form>
        </FormsArea>
      </Container>
    </>
  )
}

export default NewProduct