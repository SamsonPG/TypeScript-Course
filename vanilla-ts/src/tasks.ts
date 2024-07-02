const taskForm = document.querySelector<HTMLFormElement>('form');
const formInput= document.querySelector<HTMLInputElement>('form-input');
const tasklistElement = document.querySelector<HTMLUListElement>('.list');


 type Task={
    description:string;
    isCompleted:boolean;
 };

 const tasks: Task[]=[];

 



