import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getVersions() {
  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@token-key')}` }
  const { data } = await Http.get('/versions', { headers })
  return data;
}

export function useGetVerions() {
  const query = useQuery({
    queryKey: ['vehicles_versions'],
    queryFn: getVersions,
  })

  return query;
}