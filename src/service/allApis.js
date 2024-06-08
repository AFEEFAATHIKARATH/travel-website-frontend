// export const addPlanApi = async (bodyData) => {
//   return await commonRequest(`POST`, `${base_url}/plans`, bodyData);


import { base_url } from "./baseurl";
import { commonRequest } from "./commonStructure";
// };
export const addPlanApi = async (bodyData) => {
  return await commonRequest(`POST`, `${base_url}/plans`, bodyData);
};

export const accessPlanApi = async () => {
  return await commonRequest(`GET`, `${base_url}/plans`, {});
};

export const deletePlanApi = async (id) => {
  return await commonRequest("DELETE", `${base_url}/plans/${id}`, {});
};

export const singlePlanApi = async (id) => {
  return await commonRequest(`GET`, `${base_url}/plans/${id}`, {});
};
export const updatePlanApi = async (id, bodyData) => {
  return await commonRequest("PUT", `${base_url}/plans/${id}`, bodyData);
};
export const searchDestinationApi = async (searchTerm) => {
  return await commonRequest(
    "GET",
    `${base_url}/search?query=${searchTerm}`,
    {}
  );
};
