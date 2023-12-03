import { useState, useCallback } from 'react';
import axios from 'axios';

interface ChatResponse {
  data: string;
}

export const useChatGPT = () => {
  const [response, setResponse] = useState<string>('');

  const sendMessage = useCallback(async (message: string) => {
    console.log(message)
    try {
      const response = await axios.post<ChatResponse>('/api', { message });
      setResponse(response.data.data);
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
    }
  }, []);

  return { response, sendMessage };
};
