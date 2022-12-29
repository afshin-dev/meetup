<script>
    /**
     * import this file in App.svelte
    */

  import Product from "./Product.svelte";

    let products = [
        'p1' , 'p2' , "p3" , "p4"
    ]
    let cart = [] ;

    function addToCart(event) {
        console.log(event.detail);
        cart = [...cart, event.detail]
    }
    function deleteProduct(event) {
        console.log(event.detail);
        cart = cart.filter((p) => p !== event.detail)
    }
</script>

<style>
 span {
         background-color: #ff3e00;
         color: white;
         padding: .3rem;
         border-radius: .3rem;
    }
    #container {
        display: flex ; 
    }
</style>


<!-- html -->
<span>{cart.length}</span>
<div id="container">
    <div>
        {#each products as product (product) }
            <Product  title={product} on:add-to-cart={addToCart} on:delete={deleteProduct}></Product>
        {/each}
    </div>
    <div>
        {#each cart as item (Math.random()) }
                <span>{item}</span>
        {/each}
    </div>
</div>
