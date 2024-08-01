<script lang="ts">
    import Tools from './Tools.svelte'
    import Preview from './Preview.svelte'
    import Pagination from './pagination/index.svelte'
    import type { ProductAttributes } from '$lib/types/model';
    import Table from '../Table.svelte';

    export let data: {rows: ProductAttributes[], num: string, count: number}

    const { rows, num, count } = data
    const columns = [
        '',
        'Наименование товара',
        'Цена',
        'Действия'
    ]
</script>

<Table {columns}>
    {#each rows as {offerId, name, pictures, basicPrice}, i}
        <tr>
            <td class="text-center"><Preview link={pictures[0]} alt={offerId} /></td>
            <td><p>{name} ({offerId})</p></td>
            <td class="text-center"><p>{basicPrice} ₽</p></td>
            <td class="text-center"><Tools {num} id={offerId} /></td>
        </tr>
    {/each}
</Table>

<Pagination current={+num} {count} />

<style lang="scss">
    td {
        padding: 0;
    }
    p {
        line-height: 48px;
        margin: 0;
        padding: 0;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
    }
</style>
