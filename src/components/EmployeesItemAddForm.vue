<template>
    <form class="form_add" @submit.prevent>
        <textarea placeholder="ФИО" v-model="item.fullName"></textarea>
        <textarea placeholder="Должность" v-model="item.position"></textarea>
        <input type="date" v-model="item.DOB">
        <textarea placeholder="Отдел" v-model="item.department"></textarea>
        <label :for="item.id">Декрет
            <input type="checkbox" :id="item.id" v-model="item.maternityLeave">
        </label> 
        <div class="form_add_btns">
            <my-button @click="createEmployee" class="form_add_btn">Создать</my-button>
            <my-button @click="cancelCreate" class="form_add_btn">Отмена</my-button>
        </div>
        
    </form>    
</template>

<script>
    export default {
        data() {
            return {
                item: {
                    fullName:'',
                    position:'',
                    DOB:'',
                    department: '',
                    id: Date.now(),
                    maternityLeave: false
        }
            }
        },
        methods: {
            createEmployee() {
                this.$emit('createEmployee', this.item);
            },
            cancelCreate() {
                this.$emit('cancelCreate');
            }
        }
    }

</script>

<style>
    .form_add {
        width: 270px;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    .form_add > * {
        display: block;
        resize: none;
        width: 100%;
        margin: 5px;
        border:none;
        border-bottom: solid 1px #47B27CE6;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: bold;
        align-self: center;
    }
    .form_add_btns {
        display: flex;
        justify-content: space-around;
    }
    .form_add_btn {
        width: 50vw;;
    }
</style>