import { useContext } from 'react'
import { InfoContext } from '../contexts/InfoContext'

export function useInfoProduct() {
    const value = useContext(InfoContext);
    return value;
}