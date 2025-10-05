import monzoLogo from '../assets/monzo.png';

interface MonzoIconProps {
  className?: string;
}

export function MonzoIcon({ className = 'w-4 h-4' }: MonzoIconProps) {
  return <img src={monzoLogo} alt="Monzo" className={className} />;
}
