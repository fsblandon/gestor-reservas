import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export default function Button({
    loading,
    children,
    ...props
}: ButtonProps) {
    return (
        <button disabled={loading} {...props}
            className={`px-4 py-2 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition
        disabled:opacity-50 disabled:cursor-not-allowed ${props.className ?? ""}`}>
            {loading ? 'Cargando...' : children}
        </button>
    );
}