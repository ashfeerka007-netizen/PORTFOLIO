import { TypeAnimation } from 'react-type-animation';
import { typingPhrases } from '../../config/portfolio.config';

interface TypewriterTextProps {
  className?: string;
}

export default function TypewriterText({ className = '' }: TypewriterTextProps) {
  const sequence: (string | number)[] = [];
  typingPhrases.forEach(phrase => {
    sequence.push(phrase);
    sequence.push(2000);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className={className}
    />
  );
}
