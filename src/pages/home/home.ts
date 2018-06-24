import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  responseData: any;
  item: any;
  item1: any;
  posts: any; 
  stylea: any;
  styleb: any;
  cont: number = 0;
  posit: any;
  test: any;
 codigo1: any;
 codigo2: any;
 codigo3: any;
 codigo4: any;
 codigo5: any;
  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://menus-a041d.firebaseio.com/Menus.json').map(res => res.json()).subscribe(data => {
      this.posts = data;
      this.item = data.menu1;
      this.stylea = "#CD5C5C";
      this.styleb = "";
      console.log(this.item);
      console.log(this.posts);
      this.cont=1;
      this.codigo1="0";
      this.codigo2="1";
      this.codigo3="2";
      this.codigo4="3";
      this.codigo5="4";

      
  });

  
    let path ='https://menus-a041d.firebaseio.com/Menus.json';
    let encodedPath = path;
    let timeoutMS = 10000;

    this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data2 => {
            this.responseData = data2;
            this.item1 = JSON.stringify(this.responseData);
            console.log(this.responseData);
        },
        err => {
            console.log('error');
        });
  
      }


      opensubmenu(codigo){
        console.log(codigo);
        if(codigo=="1" ){
          if(document.getElementById("14").style.display=="block"){
            document.getElementById("14").style.display="none"
          }else{
            document.getElementById("14").style.display="block"
            document.getElementById("24").style.display="none"
            document.getElementById("34").style.display="none"
           
          }
          if(document.getElementById("13").style.display=="block"){
            document.getElementById("13").style.display="none"
          }else{
            document.getElementById("13").style.display="block"
            document.getElementById("23").style.display="none"
            document.getElementById("33").style.display="none"
           
          }
        }
        if(codigo=="2"){
          if(document.getElementById("24").style.display=="block"){
            document.getElementById("24").style.display="none"
          }else{
            document.getElementById("24").style.display="block"
            document.getElementById("14").style.display="none"
            document.getElementById("34").style.display="none"
           
          }
          if(document.getElementById("23").style.display=="block"){
            document.getElementById("23").style.display="none"
          }else{
            document.getElementById("23").style.display="block"
            document.getElementById("13").style.display="none"
            document.getElementById("33").style.display="none"
           
          }
        }

        if(codigo=="3"){
          if(document.getElementById("34").style.display=="block"){
            document.getElementById("34").style.display="none"
          }else{
            document.getElementById("34").style.display="block"
            document.getElementById("14").style.display="none"
            document.getElementById("24").style.display="none"
          }
          if(document.getElementById("33").style.display=="block"){
            document.getElementById("33").style.display="none"
          }else{
            document.getElementById("33").style.display="block"
            document.getElementById("13").style.display="none"
            document.getElementById("23").style.display="none"
          }
        }

      
      }

      orden(codigo){
         // this.opensubmenu();
        //console.log(codigo);
        //console.log(document.getElementById(codigo));
      if(this.cont == 10){

                //document.getElementById("submenu").style.display="none"
                document.getElementById(codigo).style.color="red"
                if(codigo==0){
                  document.getElementById(this.codigo2).style.display="none";
                  document.getElementById(this.codigo3).style.display="none";
                  document.getElementById(this.codigo4).style.display="none";
                  document.getElementById("item1").style.display="";

                  //document.getElementById("11").style.display="none";
                }
                if(codigo==1){
                  document.getElementById(this.codigo1).style.display="none";
                  document.getElementById(this.codigo3).style.display="none";
                  document.getElementById(this.codigo4).style.display="none";
                  document.getElementById("item1").style.display="";
                  document.getElementById("02").style.display="none"
                  document.getElementById("22").style.display="none"
                  document.getElementById("32").style.display="none"
                  document.getElementById("11").style.display="none";

                  if(document.getElementById("2").style.color=="red"){
                    document.getElementById("21").style.display="";
                    document.getElementById("1").style.display="";
                    document.getElementById("12").style.display="";
                  }
                  if(document.getElementById("3").style.color=="red"){
                    document.getElementById("31").style.display="";
                    document.getElementById("1").style.display="";
                    document.getElementById("12").style.display="";
                  }
                }
                if(codigo==2){
            
                  document.getElementById(this.codigo1).style.display="none";
                  document.getElementById(this.codigo2).style.display="none";
                  document.getElementById(this.codigo4).style.display="none";
                  document.getElementById("item1").style.display="";
                  document.getElementById("02").style.display="none"
                  document.getElementById("12").style.display="none"
                  document.getElementById("32").style.display="none"
                  document.getElementById("21").style.display="none";

                  if(document.getElementById("1").style.color=="red"){
                    document.getElementById("11").style.display="";
                    document.getElementById("2").style.display="";
                    document.getElementById("22").style.display="";
                  }
                  if(document.getElementById("3").style.color=="red"){
                    document.getElementById("31").style.display="";
                    document.getElementById("2").style.display="";
                    document.getElementById("22").style.display="";
                  }
                }
                if(codigo==3){
                  document.getElementById(this.codigo1).style.display="none";
                  document.getElementById(this.codigo2).style.display="none";
                  document.getElementById(this.codigo3).style.display="none";
                  document.getElementById("item1").style.display="";
                  document.getElementById("02").style.display="none"
                  document.getElementById("12").style.display="none"
                  document.getElementById("22").style.display="none"
                  document.getElementById("31").style.display="none";

                  if(document.getElementById("1").style.color=="red"){
                    document.getElementById("11").style.display="";
                    document.getElementById("3").style.display="";
                    document.getElementById("32").style.display="";
                  }
                  if(document.getElementById("2").style.color=="red"){
                    document.getElementById("21").style.display="";
                    document.getElementById("3").style.display="";
                    document.getElementById("32").style.display="";
                  }
                }
                this.cont=0;
      }
      ////////////////////
      /*
      if(this.cont == 50){
        document.getElementById(codigo).style.color="yellow"
        if((document.getElementById(codigo).id) =="0") {
          document.getElementById(this.codigo2).style.color="white"
          document.getElementById(this.codigo3).style.color="white"
          document.getElementById(this.codigo4).style.color="white"
          
        }
        if((document.getElementById(codigo).id) =="1") {
          document.getElementById(codigo).style.color="white"
          document.getElementById(this.codigo1).style.color="white"
          document.getElementById(this.codigo3).style.color="white"
          document.getElementById(this.codigo4).style.color="white"
        }
        if((document.getElementById(codigo).id) =="2") {
          document.getElementById(codigo).style.color="white"
          document.getElementById(this.codigo1).style.color="white"
          document.getElementById(this.codigo2).style.color="white"
          document.getElementById(this.codigo4).style.color="white"
        }
        if((document.getElementById(codigo).id) =="3") {
          document.getElementById(codigo).style.color="white"
          document.getElementById(this.codigo1).style.color="white"
          document.getElementById(this.codigo2).style.color="white"
          document.getElementById(this.codigo3).style.color="white"

        }
      }*/
              this.cont= this.cont+1;
              //console.log(this.cont);
      }
 
}
