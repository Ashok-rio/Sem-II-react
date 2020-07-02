export async function signIn (email, password)  {
    const response = await fetch('http://localhost:3100/api/user/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    // console.log('Response', response)
    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}


export async function signUp(name, email, phone, password) {
    
    
    const response = await fetch('http://localhost:3100/api/user/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            phone: phone
        }),
    })
    // console.log('Response', response)
    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}

export const getSlickImgs = async()=>{
    const response = await fetch('http://localhost:3100/api/slick/getAll')

    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}