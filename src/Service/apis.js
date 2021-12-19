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
          resolve(res);
        })
        .catch(ERROR => {
          console.log('ERROR', URL, ERROR);
          reject(ERROR);
        });
    });
  }
}
