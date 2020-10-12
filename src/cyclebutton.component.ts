import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './cyclebutton.styles';
import standardTemplate from './cyclebutton.template';

@customElement('sp-cyclebutton')
export class Cyclebutton extends Base {
  public static componentStyles = [labelStyles];

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-cyclebutton': Cyclebutton;
  }
}
