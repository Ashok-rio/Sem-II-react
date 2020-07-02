exports.signUp = async (registerBody) => {

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

exports.login = async (loginBody) => {
    const Body = loginBody
    console.log('Body', Body);
    const response = await fetch('http://localhost:3100/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(Body)
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        return await response.json();
    }
}

exports.getSlickImgs = async()=>{
    const response = await fetch('http://localhost:3100/api/slick/getAll')

    if (response.status === 200) {
        return await response.json()
    } else {
        let errorResponse = await response.json()
        throw new Error(errorResponse.error)
    }
}