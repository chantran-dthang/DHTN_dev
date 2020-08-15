function cubic(a, b, c, d)
{
    if(a==0) //neu a=0 dua ve giai phuong trinh bac 2
    {
        quadratic(b, c, d);
    }
    else
    {
        var A=b/a, B=c/a, C=d/a; // dua phuong trih bac 3 ve dang x^3 + ax^2 + bx + c=0
        var p=B-A*A/3, q=C+(2*Math.pow(A, 3)-9*A*B)/27; //dua phuong trinh ve dang t^3 + pt +q =0
        // var root={u:0, v:0, i:0} 
        var roots;
        var delta=Math.pow(q, 2)/4+Math.pow(p, 3)/27;
        if (p==0) 
        { 
            roots = [cuberoot(-q)];
        } 
        else if (q ==0)
        { 
            roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
        } 
        else 
        {
            var delta=Math.pow(q, 2)/4 + Math.pow(p, 3)/27;
            if (delta==0) // hai nghiem
            {      
                // roots = [-2*Math.pow(q/2, 1/3), Math.pow(q/2, 1/3)];
                roots = [-2*cuberoot(q/2), cuberoot(q/2)];
            } 
            else if (delta > 0) // 1 nghiem
            {            
                // roots = [-Math.pow(q/2 + Math.sqrt(delta), 1/3)-Math.pow(q/2 - Math.sqrt(delta), 1/3)];
                roots = [-1*cuberoot(q/2 + Math.sqrt(delta))-cuberoot(q/2 - Math.sqrt(delta))];
            }
            else //3 nghiem, nhung co nghiem phuc
            {                        
                var u = 2*Math.sqrt(-p/3);
                var t = Math.acos(3*q/p/u)/3;  
                var k = 2*Math.PI/3;
                roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
            }
        }
    }
    for (var i = 0; i < roots.length; i++)
    {
        roots[i] -= A/3;
        console.log(roots[i]);
    }
       
    return roots;
}
