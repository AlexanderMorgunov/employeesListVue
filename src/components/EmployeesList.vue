<template>
    <div>
        <my-button class="employees_list_btn" @click="$emit('addEmployeeBtn', true)">Добавить сотрудника</my-button>
        <div class="employees_items" v-if="employees.length > 0">
            <EmployeesItem
            v-for="employee in employees"
            :employee="employee"
            :key="employee.id"
            @change="changeField"
            @click="deleteItem"/>
        </div>
        <div v-else class="employees_items_empty">
            <h2>Список сотрудников пуст</h2>
        </div>
    </div>
    
</template>

<script>
import EmployeesItem from "./EmployeesItem.vue"

export default {
    components: {EmployeesItem},
    props: {
        employees: {
            type: Array,
            required: true
        }
    },
    methods: {
        changeField(item) {
            this.$emit('change', item);
        },
        deleteItem(id) {
            this.$emit('delete', id);
        }
    }
}

</script>
<style scoped>
.employees_items {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin-bottom: 20px;
}
.employees_items_empty {
    color:#dc3545;
    text-align: center;
}
.employees_list_btn {
    font-size: 15px;
}
</style>