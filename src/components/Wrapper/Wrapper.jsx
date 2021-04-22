import React from 'react';

const Wrapper = ({children}) => {
    return <div style={{boxShadow: '0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems:'flex-start', padding: '20px'}}>
        {children}
    </div>
}

export default Wrapper;