<script lang="ts">
    import Textarea from '../Textarea.svelte';
    import Wrapper from './index.svelte';
    export let
        name: string,
        label: string,
        value = '',
        rows = 3
</script>

<Wrapper {label} {name} >
    <Textarea slot="input" {name} {descr} {id} {rows} {value} let:id let:descr/>
    <span slot="description">
        <slot />
    </span>
</Wrapper>
