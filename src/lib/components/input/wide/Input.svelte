<script lang="ts">
    import type { InputType } from '$lib/types/styling';
    import Wrapper from './index.svelte';
    export let
        name: string,
        label: string,
        type: InputType = 'text'
</script>

<Wrapper {label} {name} >
    <input class="form-control" aria-describedby={descr} {type} {name} {id} slot="input" let:id let:descr>
    <span slot="description">
        <slot />
    </span>
</Wrapper>
