<script>
    export let name;
    export let colour;
</script>

<style>
    span {
        display: inline-block;
        width: 2em;
        height: 2em;
        background-color: red;
    }
</style>

<li>{name} <span class={colour}></span></li>