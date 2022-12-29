<script>
    import {onMount, createEventDispatcher} from "svelte" ;
    export let inputs ;

    let selected = null ;
    const dispatch = createEventDispatcher() ;

    onMount(() => {
        if (!Array.isArray(inputs)) {
            console.warn("input must be array")
        }
    })

    function done() {
        // console.log(selected);
        dispatch("selected", selected) ;
    }
</script>

<style>
    div {
        border: 1px solid silver;
    }
</style>


<div>
    {#each inputs as input (Math.random().toString()) }
        <div>
            <label for="">{input}</label>
            <input type="radio" name="same" bind:group={selected} value={input}>
        </div>
    {/each}
    <button on:click={done}>done</button>
</div>