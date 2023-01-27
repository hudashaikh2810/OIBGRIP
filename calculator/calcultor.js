var e;
        function two()
        {
        
           document.getElementById("content").value=document.getElementById("content").value+"2";
        }
        function one()
        {
            document.getElementById("content").value=document.getElementById("content").value+"1";
        }
        function three()
        {
            document.getElementById("content").value=document.getElementById("content").value+"3";
        }
        function four()
        {
            document.getElementById("content").value=document.getElementById("content").value+"4";
        }
        function five()
        {
            document.getElementById("content").value=document.getElementById("content").value+"5";
        }
        function six()
        {
            document.getElementById("content").value=document.getElementById("content").value+"6";
        }
        function seven()
        {
            document.getElementById("content").value=document.getElementById("content").value+"7";
        }
        function eight()
        {
            document.getElementById("content").value=document.getElementById("content").value+"8";
        }
        function nine()
        {
            document.getElementById("content").value=document.getElementById("content").value+"9";
            
        }
        function zero()
        {
            document.getElementById("content").value=document.getElementById("content").value+"0";
        }
        function ac()
        {
            document.getElementById("content").value="";
        }
        function subtract()
        {
            document.getElementById("content").value=document.getElementById("content").value+"-";
            e=document.getElementById("b12").value;
            
           
        }
        function add()
        {
            document.getElementById("content").value=document.getElementById("content").value+"+";
            e=document.getElementById("b16").value;
        }
        function multiply()
        {
            document.getElementById("content").value=document.getElementById("content").value+"*";
            e=document.getElementById("b8").value;

        }
        function divide()
        {
            document.getElementById("content").value=document.getElementById("content").value+"/"
            e=document.getElementById("b4").value;
        
        }
        function del()
        {
            document.getElementById("content").value=document.getElementById("content").value.slice(0,-1);
        }
        function fraction()
        {
            document.getElementById("content").value=document.getElementById("content").value+"."
        }
        function equal()
        {
            
            
            
           switch(e)
           {
               case'-':
               let len=document.getElementById("content").value.length;
               let pos=document.getElementById("content").value.indexOf("-");
               let a=document.getElementById("content").value.slice(0,pos);
               let b=document.getElementById("content").value.slice(pos+1,len);
               let c=Number(a)-Number(b);
               document.getElementById("content").value=c;
               break;
               case '+':
                let len1=document.getElementById("content").value.length;
                let pos1=document.getElementById("content").value.indexOf("+");
                let a1=document.getElementById("content").value.slice(0,pos1);
                let b1=document.getElementById("content").value.slice(pos1+1,len1);
                let c1=Number(a1)+Number(b1);
                document.getElementById("content").value=c1;
                break;
                case '*':
                    let len2=document.getElementById("content").value.length;
                    let pos2=document.getElementById("content").value.indexOf("*");
                    let a2=document.getElementById("content").value.slice(0,pos2);
                    let b2=document.getElementById("content").value.slice(pos2+1,len2);
                    let c2=Number(a2)*Number(b2);
                    document.getElementById("content").value=c2;
                    break;
                    case '/':
                        let len3=document.getElementById("content").value.length;
                        let pos3=document.getElementById("content").value.indexOf("/");
                        let a3=document.getElementById("content").value.slice(0,pos3);
                        let b3=document.getElementById("content").value.slice(pos3+1,len3);
                        let c3=Number(a3)/Number(b3);
                        document.getElementById("content").value=c3;
                        break;
                
           }
          
     
            
           
            
            
    
             
            
        }
        
        