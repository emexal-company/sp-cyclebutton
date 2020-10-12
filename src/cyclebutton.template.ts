import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Cyclebutton } from './cyclebutton.component';

export default function standardTemplate(this: Cyclebutton) {
    
return html`
<button class="spectrum-ActionButton spectrum-ActionButton--quiet spectrum-CycleButton">
    <sp-icon name="18-PlayCircle" class=""></sp-icon>
    <sp-icon name="18-PauseCircle" class=""></sp-icon>
</button>
   `;
}
