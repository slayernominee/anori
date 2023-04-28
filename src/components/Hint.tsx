import { ReactNode } from 'react';
import './Hint.scss';
import { Icon, IconProps } from './Icon';
import { Tooltip } from './Tooltip';
import clsx from 'clsx';

export const Hint = ({content, className, ...props}: {content: ReactNode} & Omit<IconProps, 'icon' | 'ref'>) => {
    return (<Tooltip label={content} maxWidth={400}>
        <Icon icon='ion:help-circle' className={clsx('Hint', className)} height={20} {...props}/>
    </Tooltip>);
};