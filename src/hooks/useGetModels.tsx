import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getModels() {
  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@token-key')}` }
  const { data } = await Http.get('/models', { headers })
  return data;
}

export function useGetModels() {
  const query = useQuery({
    queryKey: ['vehicles_models'],
    queryFn: getModels,
  })

  return query;
}