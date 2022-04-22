import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento'
import { ListaDeEventosState } from '../../state/atom';
import ListaDeEventos from '../ListaDeEventos';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{  evento: IEvento, aoAlterarStatus: (id: number) => void }> = ({ evento, aoAlterarStatus}) => {
  

  const setListaDeEventos = useSetRecoilState<IEvento[]>(ListaDeEventosState)


  const excluirEvento = () => {

    setListaDeEventos(listaAtiga => listaAtiga.filter(evento => evento.id !== evento.id ))

  }


  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} aoAlterarStatus={aoAlterarStatus}/>
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={excluirEvento}></i>
  </div>)
}

export default Evento