import fetcher from './_fetcher'
import useSWR from 'swr'
import { API_URL } from '@/constants/Api'

export default function useMoods () {
  const { data, error, isLoading } = useSWR(`${API_URL}/moods`, fetcher)
 
  return {
    data,
    isLoading,
    isError: error
  }
}