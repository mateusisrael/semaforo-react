import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    margin: 2px;
    background: ${props => props.background };
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;

class Semaforo extends React.Component{

    constructor(props) {
        super(props);


        this.l_verder = '#408000';
        this.l_laranja = '#ff9900';
        this.l_vermelha = '#cc3300';
        this.desligado = '#2b2b2b';

        this.state = {
            aberto: this.desligado,
            aguarde: this.desligado,
            fechado: this.desligado,
        };
        

    }

    abrir = () => {
        // let gre = '#408000';
        this.setState({
            aberto: this.l_verder,
            aguarde: this.desligado,
            fechado: this.desligado,
        })

        console.log('Flutter');

        
    }

    esperar = () => {
        // let ora = '#ff9900';
        this.setState({
            aberto: this.desligado,
            aguarde: this.l_laranja,
            fechado: this.desligado,
        })

        console.log('Python');

    }

    fechar = () => {
        // let red = '#cc3300';
        this.setState({
            aberto: this.desligado,
            aguarde: this.desligado,
            fechado: this.l_vermelha,
        })

        console.log('Vento');
    }



    render = () => {
        return(
            <section class="semaforo">
                {/* <div background={this.state.aberto} id="aberto" onClick={this.abrir} class="luz"></div>
                <div style={{background: this.state.aguarge}} id="atencao" onClick={this.esperar} class="luz"></div>
                <div style={{background: this.state.fechado}} id="fechado" onClick={this.fechar} class="luz"></div> */}

                <Div onClick={this.abrir} background={this.state.aberto}></Div>
                <Div onClick={this.esperar} background={this.state.aguarde}></Div>
                <Div onClick={this.fechar} background={this.state.fechado}></Div>

            </section>
        );
    }
}


export default Semaforo;