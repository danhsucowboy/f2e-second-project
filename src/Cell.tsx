import React, {FC} from 'react';
import CSS from 'csstype';

interface CellProps {
    bg?: string;
    mask?: string;
}


const cellStyle: CSS.Properties = {
    width: '96%',
    height: '97.5%',
    border: '2px solid #FCFCFC',
    borderRadius: '5px',
    opacity: '.6',
}

const Cell: FC<CellProps> =({bg = '', mask = ''})=>(
    <div style={cellStyle} className={bg}>
        {mask ? <div className={mask}></div> : ''}
    </div>
);

export default Cell;