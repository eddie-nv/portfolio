import React from 'react';

const FooterFill = ({ 
    cellHeight, cellWidth, handleMouseOver, handleMouseOut 
}: { 
    cellHeight: number, 
    cellWidth: number, 
    index: number, 
    handleMouseOver?: (ev: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => void, 
    handleMouseOut?: (ev: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => void 
}) => {

    return (
        <div 
            style={{ 
                width: `${cellWidth}px`, 
                height: `${cellHeight}px`, 
                backgroundColor: 'white', 
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

export default FooterFill;