import axios from 'axios';

const callAxiosGet = async () => {
  const userId = 7;
  const resp = await axios.get(`https://api.restful-api.dev/objects/${userId}`);
  console.log('callAxiosGet: ', resp.data);
};

callAxiosGet();

const callAxiosPost = async (shouldLog = true) => {
  const resp = await axios.post('https://api.restful-api.dev/objects', {
    name: 'Apple MacBook Pro 16',
    data: {
      year: 2019,
      price: 1849.99,
      'CPU model': 'Intel Core i9',
      'Hard disk size': '1 TB',
    },
  });

  if (shouldLog) {
    console.log('callAxiosPost: ', resp.data);
  }

  return resp.data.id;
};

callAxiosPost();

const callAxiosPut = async () => {
  const userId = await callAxiosPost(false);
  const resp = await axios.put(`https://api.restful-api.dev/objects/${userId}`, {
    name: 'Apple MacBook Pro 16',
    data: {
      year: 2019,
      price: 2049.99,
      'CPU model': 'Intel Core i9',
      'Hard disk size': '1 TB',
      color: 'silver',
    },
  });
  console.log('callAxiosPut: ', resp.data);
};

callAxiosPut();

const callAxiosPatch = async () => {
  const userId = await callAxiosPost(false);
  const resp = await axios.patch(`https://api.restful-api.dev/objects/${userId}`, {
    name: 'Apple MacBook Pro 16 (Updated Name)',
  });
  console.log('callAxiosPatch: ', resp.data);
};

callAxiosPatch();

const callAxiosDelete = async () => {
  const userId = await callAxiosPost(false);
  const resp = await axios.delete(`https://api.restful-api.dev/objects/${userId}`);
  console.log('callAxiosDelete: ', resp.data);
};

callAxiosDelete();