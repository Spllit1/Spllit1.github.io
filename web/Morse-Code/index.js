let A = ".- ";
let B = "-... ";
let C = "-.-. ";
let D = "-.. ";
let E = ". ";
let F = "..-. ";
let G = "--. ";
let H = ".... ";
let I = ".. ";
let J = ".--- ";
let K = "-.- ";
let L = ".-.. ";
let M = "-- ";
let N = "-. ";
let O = "--- ";
let P = ".--. ";
let Q = "--.- ";
let R = ".-. ";
let S = "... ";
let T = "- ";
let U = "..- ";
let V = "...- ";
let W = ".-- ";
let X = "-..- ";
let Y = "-.-- ";
let Z = "--.. ";



const message = document.getElementById('message');
const out = document.getElementById('outp');
let text;

function changeval(texta){
  //out.innerHTML = text;
  out.innerHTML = "";
  for(let i=0;i<26;i++){
    if(texta[i]=="A" || texta[i]=="a"){
      out.innerHTML += A;
    }
    else if(texta[i]=="B" || texta[i]=="b" ){
      out.innerHTML += B;
    }
    else if(texta[i]=="C" || texta[i]=="c"){
      out.innerHTML += C;
    }
    else if(texta[i]=="D" || texta[i]=="d"){
      out.innerHTML += D;
    }
    else if(texta[i]=="E" || texta[i]=="e"){
      out.innerHTML += E;
    }
    else if(texta[i]=="F" || texta[i]=="f"){
      out.innerHTML += F;
    }
    else if(texta[i]=="G" || texta[i]=="g"){
      out.innerHTML += G;
    }
    else if(texta[i]=="H" || texta[i]=="h"){
      out.innerHTML += H;
    }
    else if(texta[i]=="I" || texta[i]=="i"){
      out.innerHTML += I;
    }
    else if(texta[i]=="J" || texta[i]=="j"){
      out.innerHTML += J;
    }
    else if(texta[i]=="K" || texta[i]=="k"){
      out.innerHTML += K;
    }
    else if(texta[i]=="L" || texta[i]=="l"){
      out.innerHTML += L;
    }
    else if(texta[i]=="M" || texta[i]=="m"){
      out.innerHTML += M;
    }
    else if(texta[i]=="N" || texta[i]=="n"){
      out.innerHTML += N;
    }
    else if(texta[i]=="O" || texta[i]=="o"){
      out.innerHTML += O;
    }
    else if(texta[i]=="P" || texta[i]=="p"){
      out.innerHTML += P;
    }
    else if(texta[i]=="Q" || texta[i]=="q"){
      out.innerHTML += Q;
    }
    else if(texta[i]=="R" || texta[i]=="r"){
      out.innerHTML += R;
    }
    else if(texta[i]=="S" || texta[i]=="s"){
      out.innerHTML += S;
    }
    else if(texta[i]=="T" || texta[i]=="t"){
      out.innerHTML += T;
    }
    else if(texta[i]=="U" || texta[i]=="u"){
      out.innerHTML += U;
    }
    else if(texta[i]=="V" || texta[i]=="v"){
      out.innerHTML += V;
    }
    else if(texta[i]=="W" || texta[i]=="w"){
      out.innerHTML += W;
    }
    else if(texta[i]=="X" || texta[i]=="x"){
      out.innerHTML += X;
    }
    else if(texta[i]=="Y" || texta[i]=="y"){
      out.innerHTML += Y;
    }
    else if(texta[i]=="Z" || texta[i]=="z"){
      out.innerHTML += Z;
    }
    else if(texta[i]==" "){
      out.innerHTML += "/";
    };
    
    

  }
}
// ✅ get value of textarea on change
message.addEventListener('input', function handleChange(event) {
  console.log(event.target.value);
  text=event.target.value
  
  changeval(text);
});

