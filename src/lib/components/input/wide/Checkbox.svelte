<script lang="ts">
    import { onMount } from "svelte";
    import Field from "./Field.svelte";

    export let
        name: string,
        label: string,
        value: boolean = false,
        width: number = 25,
        disabled = false

    let input: HTMLInputElement

    const id = `id-for-${name}`

    onMount(() => {
        input.checked = value
    })
</script>

<Field {name} label="" {width} >
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" {name} {id} {disabled} bind:this={input}>
        <label class="form-check-label ms-2" for={id}>{label}</label>
    </div>
</Field>
