import React from 'react'
import Etiqueta from './Etiqueta'
import RenderListas from './components/RenderListas'

export const IndexPage = () => {
    let nombre = "Busos desde props"
    const elementos = ['A','B','C','D','E','F']
    const numeros = ['1','2','3','4','5','6']

    return (
        <div>
            
            <nav className='nav-div'>
                <a href=" ">
                    <div className='nav-wrapper App-logo'>
                    </div>
                    <h1 className='title' >Mi Tienda</h1>
                    <h1 className='about' >About us</h1>
                    <h1 className='carrito'>Carrito</h1>
                </a>                    
            </nav>        
            
            <main>
                <div className='search-box-wrapper'>
                    <input type='text' placeholder='Buscar..' className='search-box'/>
                </div>
                <div className='list-wrapper'>
                    <section className='list'>
                        <a href=" " className='list-item'> 
                            <img src="https://img.freepik.com/foto-gratis/vista-gorra-camionero-equipo-beisbol_23-2149410056.jpg?w=740&t=st=1685587241~exp=1685587841~hmac=a3aace6a5b1a0a95e36b673ede7cef0285bf41dc2bcfee6d4f5d302ee9d5015d" alt="ropaHombre"/> 
                        </a>
                        <div>
                            <p>Ropa hombre</p>
                        </div>
                        <a href=" " className='list-item'> 
                            <img src="https://img.freepik.com/psd-gratis/camiseta-maqueta-diseno_15879-478.jpg?size=626&ext=jpg&uid=R80410374&ga=GA1.2.1853624699.1685586449&semt=sph" alt="RemeraMujer"/> 
                        </a>
                        <div>
                            <p>Remera Mujer</p>
                        </div>
                        <a href=" " className='list-item'> 
                            <img src="https://img.freepik.com/foto-gratis/moda-rapida-vs-moda-lenta-sostenible_23-2149133976.jpg?w=740&t=st=1685587288~exp=1685587888~hmac=302caba7f690f38aa6959f6c5d5394918ba3650fff6f43a2ed4237b10453429d" alt="remera" />
                        </a>
                        <div>
                            <p>Remera Trols</p>
                        </div>
                        <a href=" " className='list-item'> 
                            <img src="https://img.freepik.com/psd-gratis/sueter-blanco-aislado-delante-detras_125540-2163.jpg?w=740&t=st=1686017466~exp=1686018066~hmac=36d8b65e1c7ca2cea708863483add78b1db49a574623ade1a016f27f5cf85102" alt="buso" />
                        </a>
                        <div>
                            <Etiqueta Titulo={nombre}>

                            </Etiqueta>
                            
                        </div>
                            <Etiqueta Descripcion="Descripción sin var">

                            </Etiqueta>
                    </section>
                </div>
                <div>
                    <p>Renderizar listas</p>
                    <RenderListas items={elementos} ></RenderListas>
                    <RenderListas items={numeros} ></RenderListas>
                </div>
            </main>
            
        </div>
  )
}
