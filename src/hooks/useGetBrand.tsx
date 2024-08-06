import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getBrand() {
  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@token-key')}` }
  const { data } = await Http.get('/brand', { headers })
  return data;
}

export function useGetBrand() {
  const query = useQuery({
    queryKey: ['brands'],
    queryFn: getBrand,
  })

  return query;
}