import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class novaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(){
    console.log("Solicitada nova transferencia");
    this.aoTransferir.emit({valor: this.valor, destino: this.destino});

    this.limparCampos();
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
