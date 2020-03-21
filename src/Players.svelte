<script>
    import Player from './Player.svelte';

    let players = [
        { name: 'bob' }
    ]

    let newPlayer;

    function addPlayer(event) {
        if (newPlayer) {
            players = [...players, { name: newPlayer }];
        }
    }
</script>

<div>
  <form on:submit|preventDefault={addPlayer}>
    <input type="text" placeholder="player name" bind:value={newPlayer} />
    <input type="submit" value="Add" />
  </form>
  <ul>
    {#each players as {name} (name)}
        <Player {name}/>
    {/each}
  </ul>
</div>
