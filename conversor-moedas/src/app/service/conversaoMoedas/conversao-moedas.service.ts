import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversaoMoedasService {

  constructor(private http: HttpClient) { }
  getSimbolos(): Observer<ISimbolos>{
    let requestURL: string = 'https://api.exchangerate.host/symbols';
    let request: Observable<ISimbolos> = this.http.get<ISimbolos>(requestURL);
    return request
  }

  converterMoeda(valor: number, moedaOrigem: string, moedaDestino
    : string): Observable<IConversao> {
    let requestURL: string = `https://api.exchangerate.host/convert?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`;
    let request: Observable<IConversao> = this.http.get<IConversao>(requestURL);
    return request
  }
}
