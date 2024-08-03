import { get } from "../index";
import PublicRoutes from "./Public.routes";

const PublicServices = {
  searchData: async (search) => {
    let param;
    if (param != "") {
      param = `?search=${search}`
    }
    const result = await get(PublicRoutes.searchData + param);
    return result;
  },

  getHotels: async (pagination, page, limit, city) => {
    let params = `?is_pagination=${pagination}&page_size=${limit}&page_number=${page}`;
    if (city != "") {
      params += `&city=${city}`
    }
    const result = await get(PublicRoutes.getHotels + params);
    return result;
  },

  getAttractions: async (pagination, page, limit, city) => {
    let params = `?is_pagination=${pagination}&page_size=${limit}&page_number=${page}`;
    if (city != "") {
      params += `&city=${city}`
    }
    const result = await get(PublicRoutes.getAttractions + params);
    return result;
  },

  getRestaurants: async (pagination, page, limit, city) => {
    let params = `?is_pagination=${pagination}&page_size=${limit}&page_number=${page}`;
    if (city != "") {
      params += `&city=${city}`
    }
    const result = await get(PublicRoutes.getRestaurants + params);
    return result;
  },
}

export default PublicServices;