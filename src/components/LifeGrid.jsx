import React from 'react';
import GridLayout from '../containers/GridLayout';

const LifeGrid = (props) => {
        const { cellSize } = props;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const maxGridWidth = screenWidth - 20;
        const maxGridHeight = screenHeight - 200;

        const calcNumCols = Math.floor(maxGridWidth / cellSize);
        const calcNumRows = Math.floor(maxGridHeight / cellSize);
        
        const finalGridWidth = Math.min(calcNumCols, calcNumRows);
        return (
            <div>
                <GridLayout gridId={'life'} cellSize={props.cellSize} xDim={finalGridWidth} yDim={finalGridWidth}/>
            </div>
        );
}

export default LifeGrid;