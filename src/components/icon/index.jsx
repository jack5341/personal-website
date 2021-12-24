export function LinkIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className + "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
        </svg>
    );
}

export function HamburgerIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className + " h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
}

export function DownIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className + " h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
    );
}
