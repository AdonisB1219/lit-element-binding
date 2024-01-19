import { LitElement, html, css } from "lit";

export class MyElement2 extends LitElement {

    static properties = {
        name: {
            attribute: 'fullname'
        },
        arr: {
            type: Array
        },
        obj: {
            type: Object
        }
    };

    constructor(){
        console.log('Se ejecuta el constructor');
        super();
        this.arr = [];
    }

    connectedCallback(){
        console.log();
    }

    render(){
        console.log(this.name);
        return html `
            <p>Hola ${this.name}</p>
            <p>Array ${this.arr}</p>
            <p>Object ${this.obj?.nombre}</p>

        `;
    }


}

customElements.define('my-element-2', MyElement2);



