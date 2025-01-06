import fetcher from './_fetcher'; // Zorg dat je fetcher correct is geïmplementeerd
import useSWR from 'swr';
import { API_URL } from '../constants/Api';

export default function useUserMood(userId) {
  const { data, error, isLoading } = useSWR(
    userId ? `${API_URL}/moods/${userId}` : null, // Alleen ophalen als userId bestaat
    fetcher
  );

  return {
    mood: data,
    isLoading,
    isError: error,
  };
}