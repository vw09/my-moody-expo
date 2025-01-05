import fetcher from './_fetcher'
import useSWR from 'swr'
import { API_URL } from '../constants/Api'

export default function useSongsGet (id) {
  const { data, error, isLoading } = useSWR(`${API_URL}/songs/${id}`, fetcher)
 
  return {
    data,
    isLoading,
    isError: error
  }
}