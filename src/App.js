import './App.css';
import React, { useEffect,useState } from 'react';
var novaCor;
var novoItem;
function App() {
    const [lista,setList]=useState([]);
    const [item,setItem]=useState("");
    useEffect(()=>{
    setList([""])
  },[])
  function adicionarNovoItem(){
    setList([...lista,item])
    //setNovoItem()
  }
  function deletarItem(index){
    let tempArray =[...lista];
    tempArray.splice(index,1);

    setList(tempArray);
  }
  function mudaEstado(novaCor,id){
    var elemento=document.getElementById(id);
    elemento.style.color = novaCor;
  }
  /*function mudaEstado1(novaCor){
    var elemento=lista.indexOf(item);
    elemento.style.color = novaCor;
  }*/
  function editar(index){
    deletarItem(index);
    alert("Digite a tarefa editada");
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
        <div className='todo-header'>
          <input value={novoItem} onChange={value => setItem(value.target.value)}type="text" placeholder="Adicionar Tarefa"></input>
          <button onClick={()=>adicionarNovoItem()}>Adicionar</button>
        </div>
      <u1 className="todo-list">
        {lista.map((item,index) =>(
          <div id={index}>
          <li key={index} className='todoList-item'>
            <button onClick={()=> editar(index)}>Edição</button>
            {item}
            <button  onClick={()=> mudaEstado('green',index)}>Feito</button>
            <button  onClick={()=> mudaEstado('red',index)}>A Fazer</button>
            <button onClick={()=> deletarItem(index)}>Deletar</button>
          </li>
          </div>
        ))}
      </u1>
    </div>
  );
  /*function setLista(lista){
    lista.push({novoItem});
  }*/
  /*function setNovoItem(novoItem){
    //useState({novoItem});
  }*/
  /*function adicionarNovoItem(){
    setLista([...lista,novoItem])
    setNovoItem()
  }*/
  /*function deletarItem(index){
    let tempArray =[...lista];
    tempArray.split(index,1);

    setLista(tempArray);
  }*/
}

export default App;
//Decimo Quinto commit