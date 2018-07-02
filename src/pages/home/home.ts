import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  i1: any;
  i2: any;
  i3: any;
  i4: any;
  i5: any;
  i6: any;
  i7: any;
  i8: any;
  i9: any;
  i10: any;
  responseData: any;
  path: any;
  data:any;
  item: any;
  item1: any;
  posts: any; 
  stylea: any;
  styleb: any;
  cont: number = 0;
  posit: any;
  test: any;
  test2: any;
  test3: any;
  test4: any;
  test5: any;
  test6: any;
  funtionmenu: any;
  cont1: any;
  cont2: any;
  cont3: any;
 codigo1: any;
 codigo2: any;
 codigo3: any;
 codigo4: any;
 codigo5: any;
  constructor(public navCtrl: NavController, public http: Http,public menuCtrl: MenuController) {

    this.http.get('https://menus-a041d.firebaseio.com/Menus.json').map(res => res.json()).subscribe(data => {
      this.posts = data;
      this.item = data.menu1;
      this.styleb = "";
      console.log(this.item);
      console.log(this.posts);
	  this.i1=0;
	  this.i2=0;
	  this.i3=0;
	  this.i4=0;
	  this.i5=0;
	  this.i6=0;
	  this.i7=0;
	  this.i8=0;
	  this.i9=0;
	  this.cont1=0;
	  this.cont2=0;
	  this.cont3=0;
      this.cont=1;
      this.codigo1="0";
      this.codigo2="1";
      this.codigo3="2";
      this.codigo4="3";
      this.codigo5="4";
      this.funtionmenu="false";
      for(let dato of this.item){
          this.test2 = dato.stylesMenu;
      }
      for(let dato2 of this.test2){

        this.test3 = dato2.backgroundColorMenu;
      }
      this.stylea = this.test3;
      console.log("test"+" "+this.test2);
      console.log("test2"+" "+this.test3);
      //estilos de boton
      for(let dato of this.item){
        this.test4 = dato.items;
      }
      for(let dato2 of this.test4){
        this.test5= dato2.stylesItem;
        
      }
      for(let dato3 of this.test5){
        this.test6= dato3.backgroundcolorItem;
      }
      console.log("items"+" "+this.test4);
      console.log("itemsstyle"+" "+this.test5);
      console.log("style"+" "+this.test6);
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
        if(document.getElementById("1").style.color=="red"){
          
        }else{
          if(document.getElementById("13").style.display=="block"){
            document.getElementById("13").style.display="none"
          }else{
            document.getElementById("13").style.display="block"
            document.getElementById("23").style.display="none"
            document.getElementById("33").style.display="none"
            }
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
          if(document.getElementById("2").style.color=="red"){
          }else{
          if(document.getElementById("23").style.display=="block"){
            document.getElementById("23").style.display="none"
          }else{
            document.getElementById("23").style.display="block"
            document.getElementById("13").style.display="none"
            document.getElementById("33").style.display="none"
            }
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
          if(document.getElementById("3").style.color=="red"){
          }else{
           if(document.getElementById("33").style.display=="block"){
            document.getElementById("33").style.display="none"
          }else{
            document.getElementById("33").style.display="block"
            document.getElementById("13").style.display="none"
            document.getElementById("23").style.display="none"
           }
          }
        }

        if(codigo=="31"){
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
		if(codigo==3){
			this.cont3 = this.cont3+1;
			this.cont = this.cont3;
			console.log("contador3"+ " " +this.cont3);
			//document.getElementById("13").style.display="none"
		
		}
		if(codigo==2){
			this.cont2 = this.cont2+1;
			this.cont = this.cont2;
			console.log("contador2"+ " " +this.cont2);
			//document.getElementById("13").style.display="none"
		
		}
		if(codigo==1){
			this.cont1 = this.cont1+1;
			this.cont = this.cont1;
			console.log("contador"+ " " +this.cont1);
			
			document.getElementById("13").style.display="none"
		
		}
        if(codigo==0){
             this.openSideMenu(); 
         }
      if(this.cont1 == 10 || this.cont2 == 10|| this.cont3 == 10){
                //document.getElementById("submenu").style.display="none"
                if(codigo != 0){
                  document.getElementById(codigo).style.color="red"
                }
                
                if(codigo==0){
                 // document.getElementById(this.codigo2).style.display="none";
                 // document.getElementById(this.codigo3).style.display="none";
                 // document.getElementById(this.codigo4).style.display="none";
                 // document.getElementById("item1").style.display="";
                  //document.getElementById("11").style.display="none";
                  var time1= this.cont;
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
                  var time2= this.cont;
				  this.cont1 = 0;
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
                  var time3= this.cont;
					this.cont2 = 0;
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
                  var time3= this.cont;
					this.cont3 = 0;
                }
               // this.cont=0;
            /*  return new Promise((resolve, reject) => {
                this.http.post(this.path +'/socio/login', this.data,{
                })
                  .subscribe(res => {
                    time2;
                    resolve(res);
                  }, (err) => {
                    reject(err);
                  });
              });*/
           
      }
   
      if(this.cont == 100){
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
      }
    
             // this.cont= this.cont+1;
              //console.log(this.cont);
      }
	  ordenby(codigo){
		  console.log(codigo);
		 if(codigo == 1){
			 this.i1 = this.i1+1;
		 } 
		 if(codigo == 2){
		   this.i2 = this.i2+1;
		 }
		 if(codigo == 3){
			this.i3 = this.i3+1;
		 }
		 
		 if(codigo == 5){
			 this.i4 = this.i4+1;
		 } 
		 if(codigo == 6){
		   this.i5 = this.i5+1;
		 }
		 if(codigo == 7){
			this.i6 = this.i6+1;
		 }
		 
		 if(codigo == 8){
			 this.i7 = this.i7+1;
		 } 
		 if(codigo == 9){
		   this.i8 = this.i8+1;
		 }
		 if(codigo == 10){
			this.i9 = this.i9+1;
		 }
		 
		 if(this.i1 == 10||this.i2 == 10 ||this.i3 == 10 ){
		   if(codigo==1){
			document.getElementById("15").style.background ="#77CD1D";
			document.getElementById("25").style.background ="";
			document.getElementById("35").style.background ="";
		    document.getElementById("15").style.display = "block";
		    document.getElementById("25").style.display = "block";
		    document.getElementById("35").style.display = "block";
			document.getElementById("26").style.display = "none";
			document.getElementById("36").style.display = "none";
			document.getElementById("16").style.display = "none";
			this.i1=0;
		   }
		   if(codigo==2){
		    document.getElementById("15").style.display = "none";
			document.getElementById("26").style.display = "none";
			document.getElementById("36").style.display = "none";
			document.getElementById("16").style.display = "block";
			document.getElementById("25").style.display = "block";
			document.getElementById("25").style.background ="#77CD1D";
			document.getElementById("15").style.background ="";
			document.getElementById("35").style.background ="";
			this.i2=0;
		   }
		   if(codigo==3){
		    document.getElementById("15").style.display = "none";
			document.getElementById("25").style.display = "none";
			document.getElementById("36").style.display = "none";
			document.getElementById("26").style.display = "block";
			document.getElementById("16").style.display = "block";
			document.getElementById("35").style.display = "block";
			document.getElementById("35").style.background ="#77CD1D";
			document.getElementById("15").style.background ="";
			document.getElementById("25").style.background ="";
			document.getElementById("15").style.background ="";
			this.i3=0;
		   }
		 }

		if(this.i4 == 10||this.i5 == 10 ||this.i6 == 10 ){
			if(codigo==5){
			document.getElementById("55").style.background ="#77CD1D";
			document.getElementById("65").style.background ="";
			document.getElementById("75").style.background ="";
		    document.getElementById("55").style.display = "block";
		    document.getElementById("65").style.display = "block";
		    document.getElementById("75").style.display = "block";
			document.getElementById("66").style.display = "none";
			document.getElementById("76").style.display = "none";
			document.getElementById("56").style.display = "none";
			this.i4 = 0;
			}
			if(codigo==6){
			document.getElementById("55").style.display = "none";
			document.getElementById("66").style.display = "none";
			document.getElementById("76").style.display = "none";
			document.getElementById("56").style.display = "block";
			document.getElementById("65").style.display = "block";
			document.getElementById("65").style.background ="#77CD1D";
			document.getElementById("55").style.background ="";
			document.getElementById("75").style.background ="";
			this.i5 = 0;
			}
			if(codigo==7){
			document.getElementById("55").style.display = "none";
			document.getElementById("65").style.display = "none";
			document.getElementById("76").style.display = "none";
			document.getElementById("66").style.display = "block";
			document.getElementById("56").style.display = "block";
			document.getElementById("75").style.display = "block";
			document.getElementById("75").style.background ="#77CD1D";
			document.getElementById("55").style.background ="";
			document.getElementById("65").style.background ="";
			document.getElementById("55").style.background ="";
			this.i6 = 0;
			}	
			
		}
		if(this.i7 == 10||this.i8 == 10 ||this.i9 == 10 ){
			
			if(codigo==8){
			document.getElementById("85").style.background ="#77CD1D";
			document.getElementById("95").style.background ="";
			document.getElementById("105").style.background ="";
		    document.getElementById("85").style.display = "block";
		    document.getElementById("95").style.display = "block";
		    document.getElementById("105").style.display = "block";
			document.getElementById("96").style.display = "none";
			document.getElementById("106").style.display = "none";
			document.getElementById("86").style.display = "none";
			this.i7 = 0;	
			}
			if(codigo==9){
			document.getElementById("85").style.display = "none";
			document.getElementById("96").style.display = "none";
			document.getElementById("106").style.display = "none";
			document.getElementById("86").style.display = "block";
			document.getElementById("95").style.display = "block";
			document.getElementById("95").style.background ="#77CD1D";
			document.getElementById("85").style.background ="";
			document.getElementById("105").style.background ="";
			this.i8=0;
			}
			if(codigo==10){
			document.getElementById("85").style.display = "none";
			document.getElementById("95").style.display = "none";
			document.getElementById("106").style.display = "none";
			document.getElementById("96").style.display = "block";
			document.getElementById("86").style.display = "block";
			document.getElementById("105").style.display = "block";
			document.getElementById("105").style.background ="#77CD1D";
			document.getElementById("85").style.background ="";
			document.getElementById("95").style.background ="";
			document.getElementById("85").style.background ="";
			this.i9=0;
				
			}
			
		}
		 
		 
	  }
      openSideMenu() {
        this.menuCtrl.enable(true)
         this.menuCtrl.toggle();    
     }
 
}
