<template>
    <form class="employee_form" @submit.prevent>
        <textarea v-model="item.fullName" @change="changeField"></textarea>
        <textarea v-model="item.position" @change="changeField"></textarea>
        <input type="date" v-model="item.DOB"
        @change="changeField">
        <textarea v-model="item.department" @change="changeField"></textarea>
        <label :for="item.id">Декрет
            <input type="checkbox" :id="item.id" v-model="item.maternityLeave"
            @change="changeField">
        </label> 
        <my-button class="my-button" @click="$emit('click', this.item.id)">Удалить</my-button>
    </form>    

</template>

<script>
import dayjs from "dayjs";

export default {
    props: {
        employee:{
        type: Object,
        required:true
    }
    },
    data() {
        return {
            item: {
                fullName: this.employee.fullName,
                position: this.employee.position,
                DOB: dayjs(this.employee.DOB, "DD-MM-YYYY").format('YYYY-MM-DD'),
                department: this.employee.department,
                maternityLeave: this.employee.maternityLeave,
                id:this.employee.id
            }
        }
    },
    methods: {
        changeField() {
            this.$emit('change', this.item)
        },
    }
}
</script>

<style scoped>
.employee_form {
    border: solid 1px #47B27CE6;
    border-radius:3px;
    margin: 5px 0px;
    padding: 20px 15px;
    display: grid;
    grid-template-columns: 1fr 1fr .8fr 1fr .5fr .4fr;
    align-items: baseline;
    gap: 5px;
}
.employee_form > *{
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    font-weight: bold;
    border:none;
}
.employee_form_btn_delete {
    padding: 10px;
    border-radius:3px;
    cursor: pointer;
    background-color:#fff;
    border: solid 1px #dc3545;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

textarea {
    resize: none;
    text-align: center;
}
.employee_form >*:focus {
    color: #dc3545;
}
.my-button {
    font-size: 15px;
}



@media screen and (max-width: 900px) {
    .employee_form > *{
    font-size: 80%;
}
}

@media screen and (max-width: 768px) {
    .employee_form > *{
    font-size: 80%;
}

.employee_form {
    grid-template-columns: 1fr 1fr .8fr 1fr .5fr;
    grid-template-rows: 1fr 1fr;
    align-items: baseline;
    gap: 5px;
}

.my-button {
    grid-column-start:1;
    grid-column-end:6;
    width: 100%;
}
}

@media screen and (max-width: 650px) {
    .employee_form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: baseline;
    }
    .employee_form > * {
        width:100%;
        text-align: left;
        padding-bottom: 10px;
    }
}

</style>