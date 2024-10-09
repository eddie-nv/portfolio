import React from 'react';
import FooterFill from '@/components/FooterFill';

const MouseDirectionHandler = ({ cellHeight, cellWidth, index }: { cellHeight: number, cellWidth: number, index: number }) => {
    const getDirectionKey = (event: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const { width, height, top, left } = node.getBoundingClientRect();
        const offsetX = event.pageX - (left + window.scrollX);
        const offsetY = event.pageY - (top + window.scrollY);
        const x = (offsetX - (width / 2) * (width > height ? (height / width) : 1));
        const y = (offsetY - (height / 2) * (height > width ? (width / height) : 1));
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const direction = getDirectionKey(event, node);
        updateNodeClass(node, `in-${['top', 'right', 'bottom', 'left'][direction]}`);
        updateInfoBackgroundColor(node, 'white');
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const direction = getDirectionKey(event, node);
        updateNodeClass(node, `out-${['top', 'right', 'bottom', 'left'][direction]}`);
    };

    const updateNodeClass = (node: HTMLDivElement, newClass: string) => {
        node.classList.remove('in-top', 'in-right', 'in-bottom', 'in-left', 'out-top', 'out-right', 'out-bottom', 'out-left');
        node.classList.add(newClass);
    };

    const updateInfoBackgroundColor = (node: HTMLDivElement, color: string) => {
        const infoDiv = node.querySelector('.info') as HTMLDivElement;
        if (infoDiv) {
            infoDiv.style.backgroundColor = color;
        }
    };

    return (
        <FooterFill cellHeight={cellHeight} cellWidth={cellWidth} index={index} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
    );
};

export default MouseDirectionHandler;