<script>
    import {onMount, createEventDispatcher} from "svelte" ;
    export let inputs ;

    let selected = [] ;
    const dispatch = createEventDispatcher() ;

    onMount(() => {
        if(!Array.isArray(inputs)){
            console.warn("inputs must be a array")
        }
    })
    function finishSelecting() {
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
            <input type="checkbox" name="same" bind:group={selected} value={input}>
        </div>
    {/each}
    <button on:click={finishSelecting}>finish selecting</button>
</div>