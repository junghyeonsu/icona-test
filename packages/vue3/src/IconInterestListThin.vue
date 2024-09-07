<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.0.1" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M10.9529 2.29288C11.2806 1.27603 12.7193 1.27603 13.0469 2.29288L15.0953 8.64995H21.4349C22.506 8.64995 22.9454 10.0252 22.0727 10.6462L16.9053 14.3233L18.8944 20.4306C19.2246 21.4446 18.0634 22.2881 17.2012 21.6606L11.9999 17.8754L6.79872 21.6606C5.93646 22.2881 4.77527 21.4446 5.10553 20.4306L7.0946 14.3233L1.92722 10.6462C1.05449 10.0252 1.49386 8.64995 2.56498 8.64995H8.90456L10.9529 2.29288ZM11.9999 2.9563L10.0244 9.08732C9.87793 9.54184 9.45494 9.84995 8.9774 9.84995H2.87799L7.8502 13.3881C8.24196 13.6669 8.40726 14.1678 8.25836 14.625L6.34209 20.5088L11.3527 16.8623C11.7385 16.5815 12.2614 16.5815 12.6472 16.8623L17.6578 20.5088L15.7415 14.625C15.5926 14.1678 15.7579 13.6669 16.1497 13.3881L21.1219 9.84995H15.0225C14.5449 9.84995 14.1219 9.54184 13.9755 9.08732L11.9999 2.9563Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconInterestListThin',
  props: {
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 24,
    },
  },
  setup(props) {
    const svg = ref<SVGSVGElement | null>(null);

    return {
      svg,
      size: props.size,
    };
  },
});
</script>
