import { PropType } from 'vue';

// outside
export interface SplitterProps {
  prefixCls?: string;
  className?: string;
  style?: CSSStyleDeclaration;
  rootClassName?: string;
  layout: 'horizontal' | 'vertical';
  onResizeStart?: (sizes: number[]) => void;
  onResizeEnd?: (sizes: number[]) => void;
  lazy?: boolean;
}

export interface PanelProps {
  className?: string;
  style?: CSSStyleDeclaration;
  min?: number | string;
  max?: number | string;
  size?: number | string;
  collapsible?: boolean | { start?: boolean; end?: boolean };
  resizable?: boolean;
  defaultSize?: number | string;
}

// ============ inside ============
export const _PanelProps = () => ({
  className: String,
  style: Object as PropType<PanelProps['style']>,
  min: [String, Number] as PropType<PanelProps['min']>,
  max: [String, Number] as PropType<PanelProps['max']>,
  size: [String, Number] as PropType<PanelProps['size']>,
  collapsible: [Boolean, Object] as PropType<PanelProps['collapsible']>,
  resizable: Boolean,
  defaultSize: [String, Number] as PropType<PanelProps['defaultSize']>
});
