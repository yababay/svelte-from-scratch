<script lang="ts">
    export let title: string
</script>

<main>
    <slot />
</main>

<style lang="scss">
    main {
        margin: 0;
        padding: 0;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
</style>

<svelte:head>
    <title>{title}</title>
</svelte:head>

