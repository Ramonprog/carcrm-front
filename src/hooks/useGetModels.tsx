import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getModels(brandId: number) {
  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('@token-key')}` }
  const { data } = await Http.get(`/models/${brandId}`, { headers });
  return data;
}

export function useGetModels(brandId?: number) {
  const query = useQuery({
    queryKey: ['vehicles_models', brandId],
    queryFn: () => {
      if (!brandId) {
        return Promise.reject('typeId não fornecido');
      }
      return getModels(brandId);
    },
    enabled: !!brandId,
  })

  return query;
}