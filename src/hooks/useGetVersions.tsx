import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getVersions(modelId: number) {
  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@token-key')}` }
  const { data } = await Http.get(`/versions/${modelId}`, { headers })
  return data;
}

export function useGetVerions(modelId: number) {
  const query = useQuery({
    queryKey: ['vehicles_versions', modelId],
    queryFn: () => getVersions(modelId),
    enabled: !!modelId,
  })

  return query;
}