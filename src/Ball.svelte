<script>
  export let colour = '#be0000';
  export let potted = false;
</script>

<style>
  g:hover {
    cursor: pointer;
  }
</style>

<svg width="120px" height="120px">
  <defs>
    <filter id="f" x="0" y="0" width="1" height="1.125">
      <feFlood flood-color="rgb(0,0,0)" flood-opacity="0.75" result="flood" />
      <feComposite
        in="flood"
        in2="SourceGraphic"
        operator="out"
        result="composite1" />
      <feGaussianBlur in="composite1" result="blur" stdDeviation="10" />
      <feOffset dy="-12.5" result="offset" />
      <feComposite in="offset" in2="SourceGraphic" operator="atop" />
    </filter>
  </defs>
  <g
    on:click={() => {
      potted = !potted;
    }}>
    <circle cx="60" cy="60" r="50" fill={colour} filter="url(#f)" />
    <path
      d="m63.82 35.85c-0.26-9.26-0.79-14.91-9.19-21.61 3.32-0.49 6.08-0.42
      8.71-0.21 5.73 3.55 7.42 11.05 7.51 21.88z"
      fill="#fff" />
    <path
      d="m51.09 37.80c-2.36-7.09-9.26-14.97-12.54-17.53 2.44-1.71 4.73-2.81
      7.01-3.83 5.53 4.14 9.32 8.95 11.98 19.19-1.70 0.85-3.53 1.66-6.44 2.17z"
      fill="#fff" />
  </g>
</svg>
