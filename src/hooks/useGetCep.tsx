import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { removeSpecialCharacters } from '../utils/regex';

async function getCep(cep: string) {
  const cleanedCep = removeSpecialCharacters(cep);
  console.log("🚀 ~ getCep ~ cleanedCep:", cleanedCep)
  const { data } = await axios.get(`https://viacep.com.br/ws/${cleanedCep}/json/`);
  return data;
}

export function useGetCep(cep: string) {
  const query = useQuery({
    queryKey: ['cep', cep],
    queryFn: () => getCep(cep),
    enabled: !!cep && cep.length === 8,
  })

  return query;
}