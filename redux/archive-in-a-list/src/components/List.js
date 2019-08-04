import React from 'react';
export default function List({ list, onArchive }) {
    return (
    <ul>
    {list.map(item =>
        <li key={item.id}>
            <span>
            {item.name}
            </span>
        <span>
            <button type="button" onClick={() => onArchive(item.id)}>
            Archive
            </button>
        </span>
        </li>
    )}
    </ul>
    );
}
