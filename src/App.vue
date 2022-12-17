<template>
  <div class="app">
    <AppHeader :employeesAmount="employees.length"/>
    <EmployeesList :employees="employees"
    @change="changeField"
    @delete="deleteItem"
    @addEmployeeBtn="this.dialogVisible = true"
    />
    <my-dialog v-model:show="dialogVisible" ><EmployeesItemAddForm @createEmployee="createEmployee" @cancelCreate="hideDialog"/></my-dialog>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import EmployeesList from "./components/EmployeesList.vue";
import EmployeesItem from "./components/EmployeesItem.vue"
import EmployeesItemAddForm from "./components/EmployeesItemAddForm.vue";

const setLocalStorage = (arg) => {
  localStorage.employees = JSON.stringify(arg);
} 

const getLocalStorage = () => {
  return JSON.parse(localStorage.employees);
}

const arr = localStorage.employees ? getLocalStorage() : 
  [
      {id: 1, fullName: 'Иванов Федор Степанович', position: 'Руководитель отдела', DOB: '1990.12.05', department: 'ФЦП', maternityLeave: false},
      {id: 2, fullName: 'Иванова Лариса Алексеевна', position: 'бухгалтер', DOB: '1992.03.25', department: 'Финансовый отдел', maternityLeave: true},
      {id: 3, fullName: 'Петров Василий Романович', position: 'Ведущий менеджер', DOB: '1970.01.15', department: 'Отдел по работе клиентами ОАО «РЖД»', maternityLeave: false},
      {id: 4, fullName: 'Семенов Виталий Игоревич', position: 'Старший финансовый аналитик', DOB: '1985.10.05', department: 'Финансовый отдел', maternityLeave: false},
      {id: 5, fullName: 'Семенова Ольга Степановна', position: 'Финансовый аналитик', DOB: '1991.08.15.', department: 'Финансовый отдел', maternityLeave: false},
      {id: 6, fullName: 'Роберт Дауни-Младший', position: 'актёр', DOB: '1965.4.04', department: 'MGM', maternityLeave: false},
      {id: 7, fullName: 'Васильчук Георгий Михайлович', position: 'Менеджер по подбору персонала', DOB: '1992.10.11.', department: 'Отдел по подбору персонала', maternityLeave: false},
      {id: 8, fullName: 'Трифонов Аркадий Семенович', position: 'Менеджер', DOB: '1992.08.30.', department: 'Отдел комплаенс', maternityLeave: false},
      {id: 9, fullName: 'Суворова Елена Михайловна', position: 'Руководитель отдела', DOB: '1995.05.18.', department: 'Отдел по работе с крупными корпоративными клиентами', maternityLeave: true},
      {id: 10, fullName: 'Макаров Максим Максимович', position: 'Менеджер по продажам', DOB: '2000.03.11.', department: 'Отдел по работе с корпоративными клиентами', maternityLeave: false},
  ]

export default {
  components: {AppHeader , EmployeesList, EmployeesItem, EmployeesItemAddForm},

  data() {
      return {
      employees: arr,
      dialogVisible: false,
    }
  }, methods: {

    changeField(item){
      const id = item.id;
      this.employees = this.employees.map(el => {
        if(el.id == id) {
          el = item;
        }
        setLocalStorage(this.employees);
        return el;
      })
    },
    deleteItem(id) {
      this.employees = this.employees.filter(el => el.id!==id);
      setLocalStorage(this.employees)
    },
    createEmployee(item) {
      this.employees.push(item);
      this.dialogVisible = false;
      setLocalStorage(this.employees)
    },
    hideDialog() {
      this.dialogVisible = false;
    }
  }
}
</script>

<style>
  * {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;

    }
    .app {
      width: 1024px;
    }

    @media only screen and (max-device-width: 1279px) {
      .app {
      width: 99vw;
    }
    }
</style>