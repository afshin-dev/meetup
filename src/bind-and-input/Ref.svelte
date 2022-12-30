<script>
    let nameInpt ;
    let emailInpt ;
    let ageInpt ; 

    function see () {
        console.dir(nameInpt)
        console.dir(emailInpt)
        console.dir(ageInpt)
    }
</script>


<style>
    #cot {
        border: 1px solid silver; 
    }
</style>

<h2>for seeing the getting ref from actual html element</h2>
<div id="cot">
    <label >
        Name:
        <input type="text" bind:this={nameInpt}>
    </label>
    <label >
        Email:
        <input type="email" bind:this={emailInpt}>
    </label>
    <label >
        Age:
        <input type="number" min="1" max="110" bind:this={ageInpt}>
    </label>
    <button on:click={see}>See The Console</button>
</div>

