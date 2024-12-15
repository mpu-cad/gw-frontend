interface EditIconProps {
    width?: number;
    height?: number;
    color?: string;
    onClick?: () => void;
    className?: string;
}

export function EditIcon({ width = 24, height = 24, color = '#000', onClick, className }: EditIconProps) {
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
            <path d="M11 21H21" />
            <path d="M16.5 2.5a2.121 2.121 0 0 1 3 3L7 18l-4 1 1-4L16.5 2.5z" />
        </svg>
    );
}
