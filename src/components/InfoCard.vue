<template>
    <div class="container">
        <div class="info">
            <h3>ID: {{ selectedInfo.id}}</h3>
            <h4>TITLE: {{ selectedInfo.title }}</h4>
            <p>COMMON INFO: {{ selectedInfo.body }}</p>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        selectedInfo:{
            type:Object,
            required:true,
            default: null,
        }
        }
}
</script>

<style>
.container{
    display: flex;
    justify-content:center;
    align-items: center;
    max-width: 75em;
    flex-wrap: wrap;
    padding: 40px 0;
}
.info {
    position: relative;
    background-color: #2c3e50;
    color: #ffff;
    padding: 30px;
    font-family: Roboto,sans-serif;
    width: 400px;
    height: 300px;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                inset -5px -5px -5px rgba(255,255,255,0.5),
                       5px 5px 5px rgba(0,0,0,0.5),
                      -5px -5px -5px rgba(255,255,255,0.5);
    border-radius: 15px;
    margin: 30px;
}

.info h3 h4 p{
    padding:20px;
    margin-top: 10px;
}
.info h3{
    font-size: 30px;
}
.info h4{
    font-size: 24px;
}
.info p{
    font-size: 20px;
}

</style>
