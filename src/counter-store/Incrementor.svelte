<script>
  import counter from "./store";

 function inc() {
    counter.update(count => {
        return count+1 ;
    })
 }
    
</script>


<style>

</style>

<button on:click={inc}>+</button>

