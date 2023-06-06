import React from 'react'

class Etiqueta extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h3>{this.props.Titulo}</h3>                
                <h3>{this.props.Descripcion}</h3>                
            </div>
        )
    }

}

export default Etiqueta;