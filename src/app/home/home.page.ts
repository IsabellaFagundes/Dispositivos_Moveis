import { Component } from '@angular/core';

interface Task { //tipo de tarefa
  name: string;
  done: boolean;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public newTaskName = ''; //guarda o nome inserido no input
  public completedPercentage = 0; //porcentagem de tarefas concluídas
  //ele vai ser modificado quando marcar ou desmarcar essa tarefa como concluída, e quando cria uma nova tarefa

  public tasks: Task[] = []; //lista de tarefas
  public filteredTasks: Task[] = this.tasks; //lista de tarefas filtradas
  public currentFilter: 'all' | 'done' | 'todo' = 'all'; //filtra as tarefas por todas, feitas, e para fazer
  public currentSearch = '';

  public calculateCompletedPercentage() {
    let completedAmount = 0; //amount = quantidade
    for (let i = 0; i < this.tasks.length; i++) { //vai loopar por todas as tasks e vai calcular a porcentagem
      if (this.tasks[i].done) { //se a task tiver sido completada, aumenta a quantidade de tarefas concluídas
        completedAmount++;
      }
    }
    this.completedPercentage = completedAmount / this.tasks.length;
    //a porcentagem é a quantidade de tarefas concluídas divida pelo tamanho da lista original
  }

  public addTask() { //função de adiciona uma tarefa, e o "status" inicia como "não feita", ou sej,a done: false
    const newTask = {
      name: this.newTaskName, //pega o nome guardado em newTaskName
      done: false,
      id: new Date().getTime() //pega exatamente a timestamp em que a task foi criada - numero de milissegundos que se passaram desde 01/01/1970
    }
    this.tasks.push(newTask); //da um push da lista, acrescentando a nova tarefa
    this.newTaskName = ''; //a variável newTaskName volta a ser vazia
    this.calculateCompletedPercentage(); //vai calcular a porcentagem de tarefas concluídas, ao criar uma nova tarefa
    this.updateFilter();
  }

  //public removeTask(name: string) { a função de remover vai rerificar o nome da tarefa
  //let taskIndex //é o indice da tarefa
  //for (let i = 0; i < this.tasks.length; i++) { //vai rodar toda a lista de tarefas
  //if (name === this.tasks[i].name) { //vai verificar se o nome da tarefa é o mesmo o nome que o do indice 
  // taskIndex = i;
  // break;
  // }
  //}

  public removeTask(id: number) { //a função de remover vai rerificar o id da tarefa
    const taskIndex = this.tasks.findIndex(task => task.id === id); //essa função busca uma task cujo o id dela é igual ao id da tarefa que foi selecionada pela checkbox
    this.tasks.splice(taskIndex, 1);
    //remove elementos de uma lista, ele recebe de onde ele começa e quantos ele remove 
    this.updateFilter();
  }

  public updateFilter() {
    let filteredBySegment: Task[]; //filtra por segmento
    if (this.currentFilter === 'all') {
      filteredBySegment = this.tasks; //todas as tasks
    } else if (this.currentFilter === 'done') {
      filteredBySegment = this.tasks.filter(task => task.done); //apenas as tasks que estiverem marcadas como done
    } else if (this.currentFilter === 'todo') {
      filteredBySegment = this.tasks.filter(task => !task.done); //apenas as tasks que não estiverem marcada como done
    }

    if (this.currentSearch === '') {//ele vai verificar se o nome da task inclui a busca atual (o que será digitado na barrinha)
      this.filteredTasks = filteredBySegment; //se o filtro por busca estiver vazia, considera somente o filtro por segmento
    } else {
      const lowercase = this.currentSearch.toLowerCase()
      this.filteredTasks = filteredBySegment.filter( //aqui ele vai considerar o filtro de segmento e acrescentar o filtro por busca
        task => task.name.toLowerCase().includes(lowercase) //aqui ele compara a busca, com os nomes das tasks
      );
    }
  }
}