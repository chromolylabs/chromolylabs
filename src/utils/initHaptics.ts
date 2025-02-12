import type { Haptics } from '../types/global';
import { haptics } from './haptics';

// Initialize haptics once
if (typeof window !== 'undefined') {
    (window as Window & typeof globalThis).haptics = haptics;
} 