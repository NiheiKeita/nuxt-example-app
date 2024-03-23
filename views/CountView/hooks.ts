import { readonly, ref, type Ref } from 'vue';
const inc = (counter: Ref<number>) => () => counter.value++;
const dec = (counter: Ref<number>) => () => counter.value--;

export const useCounter = () => {
  const counter = ref(0);
  return {
    counter: readonly(counter),
    inc: inc(counter),
    dec: dec(counter),
  };
};
