<script>
import NamedSlot from "./NamedSlot.svelte";
import ShowSlot from "./ShowSlot.svelte";
import SLotProp from "./SLotProp.svelte";

let slotPropSecret = "" ;

</script>

<style>


</style>

<ShowSlot>
    <h3>slot a good and approved feature on the web</h3>
</ShowSlot>
<ShowSlot>
    <h4>very simple concept but also very powerfull</h4>
</ShowSlot>

<NamedSlot>
    <div slot="header">this is a plain header</div>
    <div slot="main">this is a plain main</div>
    <div slot="footer">this is a plain footer</div>
</NamedSlot>
<SLotProp wantSecret={true}>
    <div slot="hiddendata" let:secret={slotPropSecret}>
        <p>{slotPropSecret}</p>
    </div>
</SLotProp>

