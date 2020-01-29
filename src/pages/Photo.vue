<template>
    <Fixedsidebar>
        <div class="p-content">
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            
        </div>
    </Fixedsidebar>
    
</template>

<script>
import Fixedsidebar from '../layouts/Fixedsidebar'

export default {
    metaInfo: {
      title: "Photo-Page"
    },
    components:{
        Fixedsidebar,
    }
}
</script>

<style>
.p-content{
     display: flex;
     width:80%;
    background-color: aqua;
    align-self: center;
}

</style>