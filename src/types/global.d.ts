interface Haptics {
    light: () => void;
    medium: () => void;
    strong: () => void;
    success: () => void;
    error: () => void;
}

declare global {
    interface Window {
        haptics?: Haptics;
    }
} 