import React from 'react'

import If from '../template/if'


export default props => (

    <If test={!props.hide}>      
        <button className={'btn btn-'+  props.classe}
                onClick={ props.onClick}>
            <span className={'glyphicon glyphicon-'+ props.icon}></span>{ props.chidren}
        </button>
    </If>

)