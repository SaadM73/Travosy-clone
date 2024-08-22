import { get } from "../index";
import PublicRoutes from "./Public.routes";

const PublicServices = {
  searchData: async (search, type, limit, page) => {
    let param;
    if (search != "" && type != "" && limit != "" && page != "") {
      param = `?search=${search}&type=${type}&page_size=${limit}&page_number=${page}`;
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

  getHeaderKeys: async () => {
    const result = await get(PublicRoutes.getHeaderKeys);
    return result;
  },

  getGeoLocationIds: async () => {
    const result = await get(PublicRoutes.getGeoLocationIds);
    return result;
  }
}

export default PublicServices;