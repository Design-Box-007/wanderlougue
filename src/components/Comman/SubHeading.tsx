import React from 'react';
import { cn } from '@/lib/utils';

interface SubHeadingProps {
    heading: string | React.JSX.Element;
    className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ heading, className = '' }) =>
    <h2 className={cn('text-[32px] md:text-[40px] lg:text-[64px] font-urbanist font-semibold', className)}>{heading}</h2>


export default SubHeading;
