<script>
  import {onDestroy} from "svelte"
  import Decrementor from "./Decrementor.svelte";
  import Incrementor from "./Incrementor.svelte";
  import counter from "./store"; 
  let countValue  ;

  const unsubscribe = counter.subscribe(count => {
    countValue = count ;
  })

  onDestroy(() => {
    unsubscribe() ;
  });

   
</script>

<style> 
    .wraper {
        border: 1px solid silver;
        padding: .5rem;   
    }
    #count {
        border: 1px solid silver;
        padding: .5rem;
    }
</style>


<div class="wraper">
    <span id="count">
        {countValue}
    </span>
</div>
<div class="wraper">
    <Incrementor></Incrementor>
    <Decrementor></Decrementor>
</div>
<div class="wraper">
    simple counter 
    Incremenor component increment count <br>
    Decremenor component decrement count <br>
    Counter component show countValue with subscribe to counter store <br>
</div>