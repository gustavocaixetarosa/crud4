
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Produto } from '../../interfaces/produto';
import { ProdutoImpl } from '../../produtoImpl';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss'
})
export class ProdutoFormComponent {

  constructor(private builder: FormBuilder){}

  listaProdutos: Produto[] = [{"nome": "camiseta", "preco": "5", "quantidade" : "10"}];
  form = this.builder.group({
    nome: [''],
    quantidade: [''],
    preco: ['']
  });

  public adicionarItem(){
    if (this.form.valid) {
      console.log(this.form.getRawValue());
      const novoProduto = new ProdutoImpl();
      novoProduto.nome = this.form.value.nome as string;
      novoProduto.preco = this.form.value.preco as string;
      novoProduto.quantidade = this.form.value.quantidade as string;

      this.listaProdutos.push(novoProduto);
    }
  }
}

