<script lang="ts">

    export let
        name: string,
        label: string,
        description: string = ''

    const id = `id-for-${name}`
    const descr = `${id}-description`

</script>

<div class="w-100">
    <label for={id} class="form-label" class:d-none={!(label && label.trim())}>{label}</label>
    <slot name="input" {id} {descr}>
        <input {id} class="form-control" aria-describedby={descr} {name}>
    </slot>
    <div class="form-text" id={descr}>
        <slot name="description">
            {description}
        </slot>
    </div>
</div>
