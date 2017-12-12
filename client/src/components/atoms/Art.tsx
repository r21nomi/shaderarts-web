import * as React from 'react';

interface Props {
    onClick: any;
    title: string;
}

const Art = ({ onClick, title }: Props) => (
    <div
        onClick={onClick}
    >
    {title}_Art!!!!!
    </div>
);

export default Art;