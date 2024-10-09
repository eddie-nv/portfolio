import React from 'react';

const BLACK_FILL_INDICES = new Set([57, 59, 66, 68, 76, 85, 93, 95, 102, 104, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 202, 204, 206, 220, 222, 224, 238, 242, 257, 258, 259]);
const RED_FILL_INDICES = new Set([203, 205, 221, 223, 239, 240, 241]);

const BackgroundFiller = ({ 
    cellHeight, cellWidth, index, handleMouseOver, handleMouseOut 
}: { 
    cellHeight: number, 
    cellWidth: number, 
    index: number, 
    handleMouseOver?: (ev: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => void, 
    handleMouseOut?: (ev: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => void 
}) => {
    const getBackgroundColor = (index: number) => {
        if (BLACK_FILL_INDICES.has(index)) return 'black';
        if (RED_FILL_INDICES.has(index)) return 'red';
        return '';
    };

    const backgroundColor = getBackgroundColor(index);

    return (
        <div 
            style={{ 
                width: `${cellWidth}px`, 
                height: `${cellHeight}px`, 
                backgroundColor, 
                borderTop: '1px solid lightgray', 
                borderLeft: '1px solid lightgray', 
                borderRadius: '2px' 
            }}
            onMouseOver={(ev) => handleMouseOver ? handleMouseOver(ev, ev.currentTarget) : null}
            onMouseOut={(ev) => handleMouseOut ? handleMouseOut(ev, ev.currentTarget) : null}
        >
            <div className="info"/>   
        </div>
    );
};

export default BackgroundFiller;