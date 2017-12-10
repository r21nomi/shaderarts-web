import * as React from 'react';
import '../../styles/link.css';

interface Props {
    onClick: any;
    active: boolean;
    children: any;
}

const Link = ({ active, onClick, children }: Props) => {
    if (active) {
        return <span className="Link-selected">{children}</span>;
    }

    return (
        <a className="Link"
            href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
        {children}
        </a>
    );
};

export default Link;