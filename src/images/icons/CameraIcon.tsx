interface CameraIconProps {
    width?: number;
    height?: number;
    color?: string;
    onClick?: () => void;
    className?: string;
}

export function CameraIcon({ width = 24, height = 24, color = '#000', onClick, className }: CameraIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onClick}
            className={className}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
        </svg>
    );
}
