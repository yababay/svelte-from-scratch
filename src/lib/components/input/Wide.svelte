<script lang="ts">
    import type { InputType } from '$lib/types/styling'

    export let name: string, label: string, type: InputType = 'text'
    const id = `id-for-${name}`
    const descr = `${id}-description`
</script>

<div class="w-100">
    <label for={id} class="form-label">{label}</label>
    <input {type} {id} class="form-control" aria-describedby={descr} {name}>
    <div class="form-text" id={descr}>
        <slot />
    </div>
</div>
