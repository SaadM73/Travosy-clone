import Axios from "../axios";

export const get = async (endPoint) => {
  try {
    const result = await Axios.get(endPoint);
    if (result.status === 200) return result.data;
    else throw result;
  } catch (e) {
    throw console.log(e);
  }
};

// export const post = async (endPoint, data) => {
//   try {
//     const result = await Axios.post(endPoint, data);
//     if (result.status === 200) return result.data;
//     else throw result;
//   } catch (e) {
//     throw console.log(e);
//   }
// };

// export const put = async (endPoint, data) => {
//   try {
//     const result = await Axios.put(endPoint, data);
//     if (result.status === 200) return result.data;
//     else throw result;
//   } catch (e) {
//     throw console.log(e);
//   }
// };

// export const patch = async (endPoint, data) => {
//   try {
//     const result = await Axios.patch(endPoint, data);
//     if (result.status === 200) return result.data;
//     else throw result;
//   } catch (e) {
//     throw console.log(e);
//   }
// };

// export const deleted = async (endPoint) => {
//   try {
//     const result = await Axios.delete(endPoint, { params: params });
//     if (result.status === 200) return result.data;
//     else throw result;
//   } catch (e) {
//     throw console.log(e);
//   }
// };