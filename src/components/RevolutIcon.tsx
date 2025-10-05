import revolutLogo from '../assets/revolut.png';

interface RevolutIconProps {
  className?: string;
}

export function RevolutIcon({ className = 'w-4 h-4' }: RevolutIconProps) {
  return <img src={revolutLogo} alt="Revolut" className={className} />;
}
