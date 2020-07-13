import React from 'react';

export function NCIHeader({
    className = 'p-4',
    style = {},
    imageClassName = '',
    imageStyle = {maxWidth: '80%'},
    imageProps = {},
    imageSource = '',
    url = ''
}) {
    return <header className={className} style={style}>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img 
                src={imageSource} 
                style={imageStyle}
                className={imageClassName}
                height="80" 
                alt="Header Logo" 
                {...imageProps}
            />
        </a>
    </header>
}