
function quadratic(a, b, c)
{
    if(a==0)
    {
        if(b==0)
        {
            return[];
        }
        else 
        {
            return [-c/b];
        }
    }
    else 
    {
        var deltaV = b*b-4*a*c;
        if(delta<0)
        {
           return [];
        }
        else 
        {
            if(delta==0 )
            {
                return [-b/(2*a)];
            }
            else 
            {
                return [-b-Math.sqrt(delta)/(2*a), -b+Math.sqrt(delta)/(2*a)];
            }
        }
    }
}

function cuberoot(x)
{
    var y = Math.pow(Math.abs(x), 1/3);
    return x < 0 ? -y : y;
}
