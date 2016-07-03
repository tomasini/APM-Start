import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
@Component({
    selector: 'pm-app',
    template:`
    <div><h1>Page title: {{ pageTitle }}</h1>
        <pm-products> </pm-products>
        <div>Pierwszy template</div>
    </div>`,
    directives: [ProductListComponent]

})
export class AppComponent {
    pageTitle: string = 'Acme Product Management'
    iterator1: number = 0


}