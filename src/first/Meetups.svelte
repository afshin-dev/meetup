<script>
    import MeetupItem from "./MeetupItem.svelte";

    let capacity = 0 ;
    let location = '' ;
    let error = '' ;

    let meetups = [
        {id: Math.random().toString() , location: "a:b" , capacity: 30},
        {id: Math.random().toString() , location: "123:4432" , capacity: 40},
    ]

    function add() {
       if (capacity && location) {
            meetups = [...meetups, {id: Math.random().toString(), capacity, location}]
            capacity = 0 ;
            location = '' ;
            error = '' ;
            return ; 
       }
       error = "error : incomplete form" 
    }
</script>

<style>
 #add {
        display: inline;
    }
</style>


<div id="add">
    l:<input type="text" name="location" bind:value={location}>
    c:<input type="text" name="capacity" bind:value={capacity}>
    <button on:click={add} >add</button>
</div>
{#if error}
    <p>{error}</p>
{/if}



{#each meetups as meetup (meetup.id) }
    <MeetupItem id={meetup.id} location={meetup.location} capacity={meetup.capacity} ></MeetupItem>
{/each}

