import fetcher from './_fetcher'; // Zorg ervoor dat je fetcher correct is geïmplementeerd
import useSWR from 'swr';
import { API_URL } from '../constants/Api';

export default function useRandomSong() {
  const { data, error, isLoading } = useSWR(`${API_URL}/songs/random`, fetcher);

  return {
    song: data,
    isLoading,
    isError: error,
  };
}