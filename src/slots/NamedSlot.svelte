<script>

</script>


<style>
    header {
        background-color:#40b3ff ;
        color: white;
    }
    footer {
        background-color: #676778;
        color : white ;

    }
    main {
        background-color: #ff3e00;
        color : white ;
    }
</style>

<div>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot name="main"></slot>

    </main>
    <footer>
        <slot name="footer"></slot>

    </footer>
</div>