import httpClientt from '../http-common';

const getAll = () => {
  return httpClientt.get('');
};

const create = (data) => {
  console.log(data);
  return httpClientt.post('', data);
};

const get = (id) => {
  return httpClientt.get(`${id}`);
};

const update = (data) => {
  console.log("in the empservice update");
  console.log(data);
  return httpClientt.put('', data);
};

const remove = (empId) => {
  return httpClientt.delete(`/${empId}`);
};
export default { getAll, create, get, update, remove };
