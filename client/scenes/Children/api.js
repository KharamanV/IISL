import axios from '@/services/api';
import { baseUrl } from '@/config';

const fetchChildren = () => axios(`${baseUrl}/api/children`);

export default fetchChildren;
