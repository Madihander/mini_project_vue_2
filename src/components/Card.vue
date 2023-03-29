<template>
    <div class="card">
        <div class="box">
            <div class="content">
                <h2>{{ card.id }}</h2>
                <h3>{{ card.title }}</h3>
                <h4>{{ card.subtitle }}</h4>
                <h1 class="price">{{ card.body }}</h1>
                <a v-on:click="show(card.id)" href="#">show more</a>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    props:['card'],
    props:{
        card:{
            type: Object,
            required: true,
        }
    },
    methods:{
        show(cardId){
            this.$emit('show',cardId)
        }
    }
}
</script>

<style>
.card {
    position:relative;
    width: 20em;
    height: 27.5em;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                inset -5px -5px -5px rgba(255,255,255,0.5),
                       5px 5px 5px rgba(0,0,0,0.5),
                      -5px -5px -5px rgba(255,255,255,0.5);
    border-radius: 15px;
    margin: 30px
}
.card .box{
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background-color: #ebf5fc;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
}
.card:hover .box{
    transform: translateY(-50px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    /*background:linear-gradient(45deg,#b95ce4,#4f29cd);*/
    background:linear-gradient(45deg,#C262D3,#7a04b4);
}



.card .box .content h2{
    position:absolute;
    top: -10px;
    right: 30px;
    font-size:8em;
    color: rgba(0,0,0,0.02);
    transition: 0.5s;
    pointer-events: none;
}

.container .card:hover .box .content h2 {
    color: rgba(0,0,0,0.05);
}


.card .box .content h3{
    font-size: 1.8em;
    color:#777;
    z-index:1;
    transition: 0.5s;
}

.card:hover .box .content h3{
    color:#ffff;
}

.card .box .content h1{
    font-size: 5em;
    color:#777;
    z-index:1;
    transition: 0.5s;
}

.card .box .content h4{
    margin-top: 10px;
    color:#777;
    z-index:1;
    transition: 0.5s;
}

.card:hover .box .content h1{
    color:#ffff;
}.card:hover .box .content h4{
    color:#ffff;
}


.card .box .content p{
    font-size: 1em;
    font-weight: 300;
    color:#777;
    z-index:1;
    transition: 0.5s;
}   


.card:hover .box .content h3{
    color:#ffff;
}

.price{
    margin: 20px 20px;
}

.card .box .content a{
    position: relative;
    display: inline-block;
    padding:8px 20px;
    background-color: #03a9f4;
    margin-top: 15px;
    color:#ffff;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 400;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    font-size: 1.2em;
    font-weight: 300;
    z-index:1;
    transition: 0.5s;
}   

.card:hover .box .content a{
    background-color: #ff586f;

}   
</style>