/**
 * LogoGumix Component - Reusable brand logo with hover effect
 * @author AzanoRivers | VibeCoding with Claude Sonnet 4.5
 */
import gumixLogo from '@/assets/gumix-logo.svg';
import './LogoGumix.css';

interface LogoProps {
    size?: number;
    href?: string;
}

export function LogoGumix({ size = 64, href = 'https://github.com/AzanoRivers/gumix' }: LogoProps) {
    return (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
            <a className="w-full h-full" href={href} target="_blank" rel="noopener noreferrer">
                <img
                    src={gumixLogo}
                    className="logo-image w-full h-full object-contain"
                    alt="Gumix logo"
                />
            </a>
        </div>
    );
}
