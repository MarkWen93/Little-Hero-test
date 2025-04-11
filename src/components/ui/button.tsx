import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-blue-500 text-white hover:bg-blue-600',
      },
      size: {
        default: 'h-14 px-6 py-3 text-lg',
        lg: 'h-16 px-8 py-4 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp className={clsx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
