<script lang="ts">

    export let
        num: number,
        first = false,
        last = false,
        active = false,
        leftdots = false,
        rightdots = false,
        stopleft = false,
        stopright = false

</script>

<li class="page-item">
    <a rel="external" class="page-link" class:active={active} href={`/page/${num}`} aria-label={'' + num} class:left-dots={leftdots} class:right-dots={rightdots}>
        {#if first}
            <span aria-hidden="true">&laquo;</span>
        {:else if last}
            <span aria-hidden="true">&raquo;</span>
        {:else if stopleft}
            <span aria-hidden="true">&boxvr;&boxh;</span>
        {:else if stopright}
            <span aria-hidden="true">&boxh;&boxvl;</span>
        {:else}
            <span aria-hidden="true">{num}</span>
        {/if}
    </a>
</li>

<style lang="scss">
    .left-dots::after {
        content: '...';
    }

    .right-dots::before {
        content: '...';
    }
</style>
