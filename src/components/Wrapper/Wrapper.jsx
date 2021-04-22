import React from 'react';

const Wrapper = ({children}) => {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', padding: '20px'}}>
        {children}
    </div>
}

export default Wrapper;