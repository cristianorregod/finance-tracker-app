import { apiFetch } from "@/shared/api/apiFetch";

const getChartData = async (char_id = "") => {
  const response = await apiFetch(`/charts/${char_id}`);
  return response;
};

export { getChartData };
