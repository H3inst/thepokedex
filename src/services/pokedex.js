import axios from "axios";
import { buildUrl } from "../helpers/buildUrl";

export async function getAllPokemonTypes() {
  const absoluteUrl = buildUrl(`type`);
  const { data: serviceData } = await axios.get(absoluteUrl);

  return serviceData;
}

export async function getAllPokemons(params = {}) {
  const absoluteUrl = buildUrl(`pokemon`);
  const axiosParams = {
    params
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}

export async function getPokemonsByType(type, params = {}) {
  const absoluteUrl = buildUrl(`type/${type}`);
  const axiosParams = {
    params
  };
  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);

  return serviceData;
}