<script>
    import clock from "./clock-store";
    import {onDestroy} from "svelte"
    let time = new Date() ;
    const unsub = clock.subscribe((newTime) => {
        time = newTime
    })

    onDestroy(() => {
        unsub()
    }) 
</script>

<style>
    .clock {
        background-color:#646cff ;
        color: cornsilk;
        border-radius: .3rem;
        padding: .5rem;
        box-sizing: border-box;
    }
</style>


<span class="clock">
    {time}
</span>