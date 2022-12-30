<script>
    import clock from "./clock-store";
    let time = new Date() ;
    clock.subscribe((newTime) => {
        time = newTime
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