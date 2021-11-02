const axios = require('axios').default;

const baseUrl_prod = 'https://bencozem2.herokuapp.com/api/';
const baseUrl_dev = 'http://localhost:5000/api/';

  export function test (name){
    console.log('your name is ', name)
    return "Hello "+ name;
  }

  // Course functions
  export async function getData(endpoint){
    try {
      return await axios({
        method: 'GET',
        url: baseUrl_prod+''+endpoint,
        // timeout: 3000,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      }).then((response) =>  response.data
      )
      .catch((error) => error 
      );
  
    } catch (error) {
      alert(error.message);
      return "error axios";
    }
  };

  // Others functions
  export async function testdata(){
    try {
      return await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        // timeout: 3000,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      }).then((response) =>  response.data
      )
      .catch((error) => error 
      );
  
    } catch (error) {
      alert(error.message);
      return "error axios";
    }
  }

  


