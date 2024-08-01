<script lang="ts">
    import Item from './Item.svelte'
    import { PUBLIC_ROWS_PER_PAGE } from '$env/static/public'

    const perPage = +PUBLIC_ROWS_PER_PAGE

    export let
    count: number,
    current: number = 1,
    semilimit: number = 5

    const nums = new Array(count)
    .fill(0)
    .map((_, i) => i + 1)

    let leftdots = false
    let rightdots = false

    const pages = () => {
      const length = semilimit * 2 + 1
      let left = current - semilimit - 1
      if(left < 0) left = 0
      const right = left + length
      const buff = nums.slice(left, right)
      leftdots = buff[0] > 1
      rightdots = buff[length - 1] < nums.length
      return buff
    }
</script>

<nav aria-label="pagination">
    <ul class="pagination">
      {#if count > perPage}
        <Item num={1} stopleft={true}/>
        <Item first={true} num={current <= 1 ? 1 : current - 1} {leftdots}/>
      {/if}
      {#each pages() as num }
        <Item {num} active={num === current} />
      {/each}
      {#if count > perPage}
        <Item num={current >= count ? count : current + 1} last={true} {rightdots}/>
        <Item num={count} stopright={true} />
      {/if}
      </ul>
</nav>
