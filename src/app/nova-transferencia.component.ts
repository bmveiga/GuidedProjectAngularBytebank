import { Component, Output, EventEmitter } from "@angular/core";
import { Transferencia } from "./models/transferencias.model";
import { TransferenciaService } from "./services/transferencia.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class novaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){}

  transferir(){
    console.log("Solicitada nova transferencia");
    const valorEmitir : Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado =>{
      console.log(resultado);
      this.limparCampos();
    },
    error => console.error(error)
    );
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
