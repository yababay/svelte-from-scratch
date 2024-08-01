<script lang="ts">
    export let title: string = "Привет!"
</script>

<section>
    <header>
        <slot name="header" />
    </header>
    <main>
        <slot name="main" />
    </main>
</section>

<style lang="scss">
    section {
        width: 100%;
        min-height: 100vh;
    }

    section {
        display: grid;
        grid-template:
            "header" 3.5rem
            "main" auto
    }

    section > header {
        grid-area: header;
    }

    section > main {
        grid-area: main;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<svelte:head>
    <title>{title}</title>
</svelte:head>
