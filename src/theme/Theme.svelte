<script>
        let theme = "light" ; 
        function switchTheme(mode) {
            switch (mode) {
                case "light":
                    theme = "light" ;
                    break ;
                case "dark":
                    theme = "dark" ;
                    break ;
                default :
                    theme = "light";        
            }
        }
</script>


<svelte:head>
    <link rel="stylesheet" href="{theme}.css">
</svelte:head>
<button on:click={() => switchTheme("dark")}>dark</button>
<button on:click={() => switchTheme("light")}>light</button>
<div>
   (current theme is {theme})
</div>
