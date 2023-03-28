import { useContext, } from 'react';
import { AuthContext } from '../app/hoc/authProvider';

export function useAuth() {
    return useContext(AuthContext);
}