<script>
    import { createEventDispatcher } from 'svelte'
    export let title ;

    const dispatch = createEventDispatcher() ;

    function addToCart(name) {
        dispatch('add-to-cart', name) 
    }

    function deleteProduct(name) {
        dispatch('delete',name )
    }

</script>

<style>
    span {
         background-color: #ff3e00;
         color: white;
         padding: .3rem;
         border-radius: .3rem;
    }
   
</style>


    <div>
        <span>{title}</span>
        <button on:click={() => addToCart(title)}>Add to Cart</button>
        <button on:click={() => deleteProduct(title)} >Delete</button>
    </div>
    
