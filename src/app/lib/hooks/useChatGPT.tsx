import { useState, useCallback } from 'react';
import axios from 'axios';

interface ChatResponse {
  data: string;
}

export const useChatGPT = () => {
  const [response, setResponse] = useState<string>('');

  const sendMessage = useCallback(async (resume: string, jd: string = '') => {
    console.log(resume)
    try {
      const response = await axios.post<ChatResponse>('/api', {'resume': resume, 'jd': jd});
      setResponse(response.data.data);
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
    }
  }, []);

  return { response, sendMessage };
};
