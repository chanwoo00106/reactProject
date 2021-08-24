import React from 'react'

const TabContent = ({tab}) => {
    if (tab === 0) {
        return <div>000</div>
    } else if (tab === 1) {
        return <div>111</div>
    } else if (tab === 2) {
        return <div>222</div>
    }
}

export default TabContent
