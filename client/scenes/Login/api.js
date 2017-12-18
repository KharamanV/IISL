import axios from 'axios';
import { baseUrl } from '@/config';

const login = credentials => axios.post(`${baseUrl}/api/login`, credentials);

export default login;
