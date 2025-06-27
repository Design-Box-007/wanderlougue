import React from 'react';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPosition = 'right',
  variant = 'primary',
  onClick,
  className = '',
}) => {
  const base =
    'flex items-center justify-between px-5 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-[40px] font-medium text-sm md:text-base lg:text-lg transition focus:outline-none';

  const variants: Record<string, string> = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-white text-black border border-black hover:bg-gray-100',
  };

  const iconStyle =
    'p-1 md:p-2 rounded-full shrink-0 text-sm md:text-base lg:text-lg';

  const iconWrapper = `${variant === 'primary' ? variants.secondary : variants.primary} ${iconStyle}`;

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className={iconWrapper}>{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === 'right' && <span className={iconWrapper}>{icon}</span>}
    </button>
  );
};

export default Button;
