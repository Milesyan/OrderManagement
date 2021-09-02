import React, {PropsWithChildren} from 'react'

interface IModal {

}
export default function Modal(props: PropsWithChildren<IModal>) {
  return (
    <div className="overlay">
      <div className="content">
        {props.children}
      </div>
    </div>
  )

}