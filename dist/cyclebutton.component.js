import { __decorate } from "tslib";
import { customElement } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './cyclebutton.styles';
import standardTemplate from './cyclebutton.template';
let Cyclebutton = class Cyclebutton extends Base {
    render() {
        return standardTemplate.call(this);
    }
};
Cyclebutton.componentStyles = [labelStyles];
Cyclebutton = __decorate([
    customElement('sp-cyclebutton')
], Cyclebutton);
export { Cyclebutton };
//# sourceMappingURL=cyclebutton.component.js.map