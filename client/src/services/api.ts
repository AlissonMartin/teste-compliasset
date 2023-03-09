const BASE_URL = 'http://localhost:5000'

export const editProduct = async (body: FormData)=> {
    const res = await fetch(`${BASE_URL}/product`, {
        method: 'PUT',
        body
    })
    const json:any = await res.json()
    return json
}

export const getProducts = async ()=> {
    const response = await fetch(`${BASE_URL}/products`)
    const json = await response.json()
    return json
}

export const getProduct = async (id:string)=> {
    const response = await fetch(`${BASE_URL}/product/${id}`)
    const json = await response.json()
    return json
}

export const addProduct = async (body: FormData)=> {
    const response = await fetch(`${BASE_URL}/product`, {
        method: 'POST',
        body
    })
    const json = await response.json()
    return json
}

export const deleteProduct = async (id:number)=> {
    const response = await fetch(`${BASE_URL}/delete/${id}`)
    const json = await response.json()
    return json
}