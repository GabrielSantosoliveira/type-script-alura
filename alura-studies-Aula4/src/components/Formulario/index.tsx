import React from 'react';
import { Itarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from "uuid";


class Formulario extends React.Component <{
  setTarefas:React.Dispatch<React.SetStateAction<Itarefa[]>>}>{
 
  state = {
    tarefa : "",
    tempo : "00:00:00"
  }

  adicinarTarefa(e:React.FormEvent){
    e.preventDefault();
    this.props.setTarefas(setTarefaAntigas => [ 
      ...setTarefaAntigas 
      , 
      {
        
        ...this.state,
        selecionado:false,
        completado:false,
        id : uuidv4()


      }   
    ])
    this.setState({
      tempo:"",
      tarefa:"00:00:00"
    })
   
  }
  

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={e => {
        this.adicinarTarefa(e)
      }}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(e)=>{
              this.setState({...this.state , tarefa:e.target.value})
            }}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={(e)=>{
              this.setState({ ...this.state , tempo:e.target.value})
            }}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type='submit'>
          Adicionar
        </Botao>
      </form>
    )
  }
}

export default Formulario;