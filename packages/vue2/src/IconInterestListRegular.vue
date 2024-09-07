<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.0.1" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M10.7628 2.23171C11.15 1.02998 12.8502 1.02998 13.2375 2.23171L15.2412 8.45012H21.4351C22.701 8.45012 23.2202 10.0754 22.1888 10.8093L17.1411 14.4012L19.0847 20.3688C19.475 21.5672 18.1027 22.5641 17.0836 21.8225L12.0001 18.1229L6.9166 21.8225C5.89756 22.5641 4.52524 21.5672 4.91554 20.3688L6.85912 14.4012L1.81145 10.8093C0.780045 10.0754 1.29929 8.45012 2.56517 8.45012H8.75906L10.7628 2.23171ZM12.0001 3.60859L10.2149 9.14883C10.0418 9.68599 9.54195 10.0501 8.97759 10.0501H3.50419L7.96634 13.2253C8.42934 13.5548 8.62469 14.1468 8.44871 14.6871L6.72354 19.9841L11.2352 16.7007C11.6912 16.3689 12.3091 16.3689 12.7651 16.7007L17.2767 19.9841L15.5515 14.6871C15.3756 14.1468 15.5709 13.5548 16.0339 13.2253L20.4961 10.0501H15.0227C14.4583 10.0501 13.9584 9.68599 13.7853 9.14882L12.0001 3.60859Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconInterestListRegular',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
  },
  data() {
    return {
      svg: null as Element | null,
    };
  },
  mounted() {
    this.svg = this.$refs.svg as Element;
  },
};
</script>
