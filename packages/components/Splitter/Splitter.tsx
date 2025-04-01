import { defineComponent, withDefaults } from 'vue';
import { initDefaultProps } from '@md-editor/utils';
import { _PanelProps, type SplitterProps } from './interface';

export default defineComponent({
  name: 'MESplitter',
  props: initDefaultProps(_PanelProps(), { min: 7 }),
  setup(props) {
    return () => <span>{props.min}</span>;
  }
});
