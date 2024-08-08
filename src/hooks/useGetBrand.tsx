import { useQuery } from '@tanstack/react-query';
import Http from '../config/Http';

async function getBrand(typeId: number) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('@token-key')}`
  };

  try {
    const { data } = await Http.get(`/brand/${typeId}`, { headers });
    return data;
  } catch (error) {
    console.error('Erro ao buscar marca:', error);
  }
}

export function useGetBrand(typeId?: number) {
  const query = useQuery({
    queryKey: ['brands', typeId],
    queryFn: () => {
      if (!typeId) {
        return Promise.reject('typeId não fornecido');
      }
      return getBrand(typeId);
    },
    enabled: !!typeId,
  });

  return query;
}
