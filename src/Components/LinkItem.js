import React from 'react';

 function LinkItem (props){
    const { name } = props;
    return (
        //<ul>
        //<li>{name}</li>
        //</ul>
        <button>{name}</button>
    );

}
export default LinkItem;
