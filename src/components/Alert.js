import React from 'react'

export default function Alert(props) {

    function capitalize(type){
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
    
  return (
      props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
</div>
  )
}
