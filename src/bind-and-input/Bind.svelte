<script>
  import CheckBoxes from "./CheckBoxes.svelte";
  import RadioButtons from "./RadioButtons.svelte";
  import Ref from "./Ref.svelte";


</script>

<style>

</style>

<!-- markup -->
<CheckBoxes inputs={["slim", "cage", "room" , "zeeme"]} on:selected={(e) => console.log(e.detail)}></CheckBoxes>
<RadioButtons inputs={["red", "blue", "green"]} on:selected={(e) => console.log(e.detail)}></RadioButtons>
<Ref></Ref>