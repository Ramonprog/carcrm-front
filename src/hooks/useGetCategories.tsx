import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getCategories() {
  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@token-key')}` }
  const { data } = await Http.get('/category', { headers })
  return data;
}

export function useGetCategories() {
  const query = useQuery({
    queryKey: ['vehicles_categories'],
    queryFn: getCategories,
  })

  return query;
}