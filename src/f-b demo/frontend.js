const axios = require('axios').default

async function request() {
    const result = await axios.get("http://localhost:8080")
    console.log(result.data)
}

request()