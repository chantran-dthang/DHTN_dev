function cubic(a, b, c, d)
{
    if(a==0) //if a=0, solves the quadratic equation 
    {
        quadratic(b, c, d);
    }
    else
    {
        var A=b/a, B=c/a, C=d/a; // put the equation in form of x^3 + ax^2 + bx + c=0
        var p=B-A*A/3, q=C+(2*Math.pow(A, 3)-9*A*B)/27; //put the equation form of t^3 + pt +q =0
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
            if (delta==0) // two roots
            {      
                roots = [-2*cuberoot(q/2), cuberoot(q/2)];
            } 
            else if (delta > 0) // one root
            {            
                roots = [-1*cuberoot(q/2 + Math.sqrt(delta))-cuberoot(q/2 - Math.sqrt(delta))];
            }
            else //three roots includes complex root(s)
            {                        
                var u = 2*Math.sqrt(-p/3);
                var t = Math.acos(3*q/p/u)/3;  
                var k = 2*Math.PI/3;
                roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
            }
        }
       
        for (var i = 0; i < roots.length; i++)
        {
            roots[i] -= A/3;
        }
        console.log(roots);
        return roots;
    }
   
}
