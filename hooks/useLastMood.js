import useSWR from 'swr';
import { API_URL } from '@/constants/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json();
};

export default function useLastMood() {
  const { data, error, isLoading, mutate } = useSWR(async () => {
    const userId = JSON.parse(await AsyncStorage.getItem('userId')).id;
    return `${API_URL}/users/${userId}/last-mood`;
  }, fetcher);

  return {
    mood: data,
    isLoading,
    isError: !!error,
    refresh: mutate,
  };
}