import * as angular from "angular";


module app {
    
    class AppComponent {
        
        public bindings:any;
        public controller:any;
        public templateUrl:string;
        public template:string;
        
        constructor(){
            this.template = `<div>Test</div>`;
        }
    }
    angular.module("Hercules", []).component('appComponent', new AppComponent());
}