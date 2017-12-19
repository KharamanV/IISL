import axios from '@/services/api';
import { baseUrl } from '@/config';

const fetchScreens = () => axios(`${baseUrl}/api/speech_screens`);

export default fetchScreens;
