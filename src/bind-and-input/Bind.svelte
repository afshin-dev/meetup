<script>
  import CheckBoxes from "./CheckBoxes.svelte";


</script>

<style>

</style>

<!-- markup -->
<CheckBoxes inputs={["slim", "cage", "room" , "zeeme"]} on:selected={(e) => console.log(e.detail)}></CheckBoxes>