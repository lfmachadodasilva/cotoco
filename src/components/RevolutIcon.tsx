import revolutLogo from '../assets/63284bd41b4d0a7e6c7bff6ae2c549825b1edfff.png';

interface RevolutIconProps {
  className?: string;
}

export function RevolutIcon({ className = 'w-4 h-4' }: RevolutIconProps) {
  return <img src={revolutLogo} alt="Revolut" className={className} />;
}
