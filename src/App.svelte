<script>
  import { flip } from 'svelte/animate';
  import { sineInOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';

  import Ball from './Ball.svelte';
  import Players from './Players.svelte'

  const balls = [
    { potted: false, colour: '#ffe900' },
    { potted: false, colour: '#03ab70' },
    { potted: false, colour: '#cc731a' },
    { potted: false, colour: '#009cda' },
    { potted: false, colour: '#febfa1' },
    { potted: false, colour: '#151d1f' }
  ];

  const anim = {
    duration: 100,
    easing: sineInOut
  };

  const [send, receive] = crossfade({
    ...anim,
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        ...anim,
        css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
              `
      };
    }
  });
</script>

<style>
  main {
    font-family: Avenir, Helvitica, Arial, sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
  }

  .balls {
    display: flex;
    justify-content: center;
    height: 120px;
  }

  .table {
    background-color: rgb(2, 107, 2);
  }

  .rail {
    background-color: rgb(61, 61, 61);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Colour Chase</h1>
  <div class="balls table">
    {#each balls.filter(b => !b.potted) as ball (ball.colour)}
      <div
        in:receive={{ key: ball.colour }}
        out:send={{ key: ball.colour }}
        animate:flip={anim}>
        <Ball bind:potted={ball.potted} colour={ball.colour} />
      </div>
    {/each}
  </div>
  <div class="balls rail">
    {#each balls.filter(b => b.potted) as ball (ball.colour)}
      <div
        in:receive={{ key: ball.colour }}
        out:send={{ key: ball.colour }}
        animate:flip={anim}>
        <Ball bind:potted={ball.potted} colour={ball.colour} />
      </div>
    {/each}
  </div>
  <Players />
</main>
