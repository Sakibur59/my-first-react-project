
export default function ToDo ({task,isdone}){

        if(isdone === true){
          return  <li>Complete: {task}</li>
        }
        else {
          return  <li>Not Complete:{task} </li>
        }
    
}