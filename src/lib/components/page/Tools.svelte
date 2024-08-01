<script lang="ts">

    export let
    id: string | number | undefined,
    num: string

</script>

<form method="post" class="h-100 w-100 text-center pt-2">
    <input type="hidden" name="id" value={id}>
    <input type="hidden" name="num" value={num}>
    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
        <a rel="external" href={`/edit/${id}?back=${num}`} class="btn btn-outline-secondary btn-sm" title="Править"><i class="bi bi-pen"></i></a>
        <a rel="external" href={`/activation/${id}?back=${num}`} class="btn btn-outline-secondary btn-sm" title="Добавить коды"><i class="bi bi-file-binary"></i></a>
        <!-- button formaction="?/delete"  type="submit" class="btn btn-outline-secondary btn-sm" title="Удалить"><i class="bi bi-trash"></i></button -->
    </div>
</form>
