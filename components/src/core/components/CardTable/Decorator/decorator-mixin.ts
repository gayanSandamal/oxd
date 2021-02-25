import {defineComponent} from 'vue';

export const decoratorMixin = defineComponent({
  props: {
    rowItem: {
      type: Object,
      default: () => ({}),
    },
  },

  inject: ['tableProps'],
});

export default decoratorMixin;