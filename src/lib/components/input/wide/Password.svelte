<script lang="ts">
    import Input from "./Input.svelte";
    export let name: string, label: string
</script>

<Input {label} {name} type="password">
    <slot />
</Input>
