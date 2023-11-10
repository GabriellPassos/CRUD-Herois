import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroiService } from '../../heroi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroi } from '../../heroi.model';

@Component({
  selector: 'app-heroi-cadastrar-editar',
  templateUrl: './heroi-cadastrar-editar.component.html',
  styleUrls: ['./heroi-cadastrar-editar.component.css']
})
export class HeroiCadastrarEditarComponent implements OnInit{
  formGroup!: FormGroup
  heroi? : Heroi;
  listaSuperPoderes:any;
  constructor(
    private formBuilder:FormBuilder, 
    private heroiService: HeroiService, 
    private router:Router,
    private activatedRoute : ActivatedRoute

    ){}
  ngOnInit(){
    this.heroi = this.activatedRoute.snapshot.data["heroi"][0];
    this.heroiService.buscarSuperPoderes().subscribe((resposta) => {
      this.listaSuperPoderes = resposta
    });
    this.formGroup = this.formBuilder.group({
      id:[(this.heroi ? this.heroi.id : null), Validators.required],
      nome: [(this.heroi ? this.heroi.nome : null), Validators.required],
      nomeHeroi: [(this.heroi ? this.heroi.nomeHeroi : null), Validators.required],
      superPoderes: [(this.heroi ? this.heroi.superPoderes : null), Validators.required],
      altura: [(this.heroi ? this.heroi.altura : null), Validators.required],
      peso: [(this.heroi ? this.heroi.peso : null), Validators.required],
      nascimento: [(this.heroi ? this.heroi.nascimento : null), Validators.required]
    });
  }
  salvar(){
    let superPoderesJson = []
    for (let index = 0; index < this.formGroup.value.superPoderes.length; index++) {
      const elemento = this.formGroup.value.superPoderes[index];
      superPoderesJson.push(JSON.parse(elemento));
    }
    this.formGroup.value.superPoderes = superPoderesJson;

    if(this.heroi && this.heroi.id){

      this.heroiService.atualizar(this.formGroup.value).subscribe(
        res =>{
          alert("Erro ao editar." + JSON.stringify(res));
          this.router.navigateByUrl("/");
          
        },
        error =>{
        }
      )
    }else{
      this.heroiService.cadastrar(this.formGroup.value).subscribe(
        res =>{
          alert("Erro ao editar." + JSON.stringify(res));
          this.router.navigateByUrl("/");
        },
        error =>{
        }
      )
    }
  }
}
