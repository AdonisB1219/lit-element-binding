import { LitElement, html, css } from "lit";
import { MyElement2 } from "./my-element-2";

export class MyElement3 extends LitElement {

    



    render(){
        console.log(this.name);
        return html `
            <my-element-2 name="Adonis" arr='[1,2,3]')} obj=${'{"nombre": "Miriam"}'}></my-element-2>

            <my-element-2 .name=${"Benito"} arr=${JSON.stringify([1,2,3])} obj='{"nombre": "Miriam"}'></my-element-2>
        `;
    }


}

customElements.define('my-element-3', MyElement3);



