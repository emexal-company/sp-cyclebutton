import { html } from 'lit-element';
import { DemoCyclebutton } from './demo-cyclebutton.component';

import '@spectrum/sp-cyclebutton';
import '@spectrum/sp-container';


export default function template(this: DemoCyclebutton) {
  return html`
  <sp-container>
  <section>
  <sp-heading size="XS">Standard</sp-heading><pre><code id="code" class="language-html">&lt;sp-cyclebutton>&lt;/sp-cyclebutton></code></pre>
      <sp-cyclebutton></sp-cyclebutton>
  </section>
  </sp-container>
  `;
  
}
