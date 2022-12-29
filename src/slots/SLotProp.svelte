<script>
    let secret = "this is private to this component" ;
    export let wantSecret = false  ; 
</script>

<style>

</style>

<div>
    <slot name="hiddendata" secret={wantSecret ? secret : ""}></slot>
</div>

