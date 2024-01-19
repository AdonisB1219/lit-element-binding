import { LitElement, html, css } from "lit";
import styles from "./my-element-styles";

export class MyElement extends LitElement {

    static properties = {
        name: {
            reflect: false
        }
    };

    static styles = [styles];

    constructor(){
        console.log('Se ejecuta el constructor');
        super();
        this.name = "Adonis";
    }

    connectedCallback(){
        super.connectedCallback();
        console.log('Se ejecuta el connectedCallback');
    }

    disconnectedCallback(){
        super.disconnectedCallback();
        console.log('Se ejecuta el disconnectedCallback');
    }

    shouldUpdate(changedProperties){
        console.log('se ejecuta el shouldUpdate');
        return changedProperties;
    }

    render(){
        return html `
            <p>Hola ${this.name}</p>
        `;
    }
}

customElements.define('my-element', MyElement);