import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getColors() {
  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@token-key')}` }
  const { data } = await Http.get('/colors', { headers })
  return data;
}

export function useGetCarColors() {
  const query = useQuery({
    queryKey: ['vehicles_colors'],
    queryFn: getColors,
  })

  return query;
}