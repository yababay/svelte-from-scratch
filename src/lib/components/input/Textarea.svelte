<script lang="ts">

    const random = `${Math.random()}`

    export let
        name: string = 'message',
        placeholder: string = '',
        value: string = '',
        rows: number = 3,
        maxlength = 50000,
        id: string = `id-for-${random}`,
        descr: string = `${id}-description`

</script>

<textarea class="form-control w-100 h-100"  aria-describedby={descr} {rows} {name} {value} {placeholder} {maxlength} {id} ></textarea>
