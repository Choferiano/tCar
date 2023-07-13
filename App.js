import MainScreen from './src/Screens/MainScreen';

const  taskList = [
  {
    id: 1,
    task: "Meditar (7 am)",
    completed: false
  },{
    id: 2,
    task: "Desayunar (8 am)",
    completed: false
  },{
    id: 3,
    task: "Trabajar (9 am)" ,
    completed: false
  },{  
    id: 4,
    task: "Pintar (1 pm)",
    completed: false
  },{
    id: 5,
    task: "Comprar (4 pm)",
    completed: false
  },
]  

export default function App() {
  return (
      <MainScreen taskList ={taskList}/>
  );
}


