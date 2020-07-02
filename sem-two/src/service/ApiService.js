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


exports.createAddress = async (body) => {
    const token = localStorage.getItem('usertoken');
    console.log(token,"token")
    const response = await fetch('http://localhost:3100/api/address/create', {
      method: "POST",
      header: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('usertoken'),
      },
      body: JSON.stringify(body),
    });
  
    if (response.status === 200) {
      return await response.json();
    } else {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  };

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

exports.getProductOne = async (id) => {
    const response = await fetch(`http://localhost:3100/api/product/get/${id}`, {
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