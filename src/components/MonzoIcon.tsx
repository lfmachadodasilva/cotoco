import monzoLogo from '../assets/d577d9d993e471ec2b6aee28993958e783549110.png';

interface MonzoIconProps {
  className?: string;
}

export function MonzoIcon({ className = 'w-4 h-4' }: MonzoIconProps) {
  return <img src={monzoLogo} alt="Monzo" className={className} />;
}
