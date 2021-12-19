import axios from 'axios';

const instance = axios.create();

export class ApiCall {
  getData(URL) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'GET',
        url: URL,
      })
        .then(res => {
          console.log('success', URL, res.data);
          resolve(res);
        })
        .catch(ERROR => {
          console.log('ERROR', URL, ERROR, ERROR.response.data);
          reject(ERROR);
        });
    });
  }
}
