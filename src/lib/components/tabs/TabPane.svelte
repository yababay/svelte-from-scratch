<script lang="ts">
    import type { Booleanish } from "svelte/elements";

    export let id: string, selected: Booleanish = "false"
    const active = selected === true || selected === "true"
</script>

<div class="tab-pane fade h-100" {id} role="tabpanel" aria-labelledby="home-tab" tabindex="0" class:active={active} class:show={active}>
    <slot>
        <div class="alert alert-secondary w-100 text-center" role="alert">
            Панель {id}.
        </div>
    </slot>
</div>
