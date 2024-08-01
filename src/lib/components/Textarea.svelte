<script lang="ts">

    export let
        name: string = 'message',
        placeholder: string = '',
        value: string = '',
        rows: number = 3,
        maxlength = 50000

</script>

<textarea class="form-control w-100 h-100" {rows} {name} {value} {placeholder} {maxlength}></textarea>
