import fetcher from './_fetcher'
import useSWR from 'swr'
import { API_URL } from '@/constants/Api'

export default function usePlaylists () {
  const { data, error, isLoading } = useSWR(`${API_URL}/playlists`, fetcher)
 
  return {
    data,
    isLoading,
    isError: error
  }
}