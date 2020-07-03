exports.signUp = async (registerBody) => {

    const Body = {
        name: registerBody.name,
        password: registerBody.password,
        phone: registerBody.phone,
        email: registerBody.email,
        admin: true
    }
    const response = await fetch('http://localhost:3100/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Body),
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}

exports.login = async (loginBody) => {
    const Body = loginBody
    console.log('Body', Body);
    const response = await fetch('http://localhost:3100/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Body)
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        return await response.json();
    }
}
exports.adminsignUp = async (registerBody) => {

    const Body = registerBody
    const response = await fetch('http://localhost:3100/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Body),
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}

exports.adminlogin = async (loginBody) => {
    const Body = loginBody
    console.log('Body', Body);
    const response = await fetch('http://localhost:3100/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Body)
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        return await response.json();
    }
}

exports.getSlickImgs = async () => {
    const response = await fetch('http://localhost:3100/api/slick/getAll')

    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}

exports.getUserData = async () => {
    const token = localStorage.getItem('usertoken')
    const response = await fetch('http://localhost:3100/api/user/get', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}
exports.getAllProduct = async () => {
    const response = await fetch('http://localhost:3100/api/product/getAll', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    console.log('response', response);
    if (response.status === 200) {
        return await response.json();
    }
    else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}

exports.createProduct = async (body) => {
    let reqCreate = {
        name: body.name,
        size: body.size,
        quantity:body.quantity,
        price: body.price,
        url: body.url,
        color: body.color
    }
    const token = localStorage.getItem('usertoken')
    const response = await fetch('http://localhost:3100/api/product/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(reqCreate)
    })
    if (response.status === 200) {
        return await response.json()
    }
    else if (response.status === 401) {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}