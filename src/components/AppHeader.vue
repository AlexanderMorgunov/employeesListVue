<template>
    <div class="header">
        <h1>Cписок сотрудников</h1>
        <h2>Всего сотрудников: {{employeesAmount}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        employeesAmount: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #47B27CE6;
    color: white;
    margin: 20px 0;
    padding: 30px;
    border-radius: 3px;
    font-size: 125%;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    text-align: center;
}

@media screen and (max-width: 1200px) {
    .employee_form > *{
    font-size: 80%;
}
.header {
    margin-top: 5px;
}
}

</style>